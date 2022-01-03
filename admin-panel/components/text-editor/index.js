import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Editor } from '@tinymce/tinymce-react';
import { newPost } from '../../../redux/actions/post';
import styles from "../../styles/modal.module.css";

function App({state, setState, pagination, handlePagination, newPost, ...props}) {
    const editorRef = useRef(null);

    useEffect(() => {
        if(props.post.post){
           console.log("OK")
        }
    }, [props.post])
    const submit = () => {
        if (editorRef.current) {
            setState(prevState=>({...prevState, content: editorRef.current.getContent()}));
            const {title, description, image, content, category, tags} = state;
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);
            formData.append('content', content);
            formData.append('category', JSON.stringify(category));
            formData.append('tags', JSON.stringify(tags));
            newPost(formData)
        }
    };

    const fileImagePicker = (callback, value, meta) => {
        // Provide image and alt text for the image dialog
        if (meta.filetype == 'image') {
            //callback('myimage.jpg', {alt: 'My alt text'});
            const input = document.getElementById('my-file');
            input.click();
            input.onchange = function () {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = function (e) {
                    callback(e.target.result, {
                        alt: file.name
                    });
                };
                reader.readAsDataURL(file);
            };
        }
    }
    
    return (
        <>
            <input id="my-file" type="file" name="my-file" style={{ display : "none" }} />
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                init={
                    {
                        min_height: 400,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:15px }',
                        file_picker_callback: fileImagePicker,
                        file_picker_types: 'file image media',
                        selector: 'textarea',
                    }
                }
            />
            <>
                <div className = {styles.btnContainer}>
                    {
                        pagination ? (
                            <>
                                <div onClick = {()=>handlePagination(1)} className = {styles.btn}>
                                    Previous
                                </div>
                                <div onClick = {() => submit()}  className = {styles.btn}>
                                    Submit
                                </div>
                            </>
                        ): null
                    }
                </div>
            </>
        </>
    );
}

App.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    newPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
});


export default connect(mapStateToProps, {newPost})(App);