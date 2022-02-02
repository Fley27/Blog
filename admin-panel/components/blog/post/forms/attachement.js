import React, {useState, useRef} from 'react'; 
import MultiSelect from '../../../react-select/multi-select.tsx';
import {tagsOptions, categoriesOptions} from "../../../../docs/data.ts"
import styles from "../../../../styles/form.module.css"

const Attachment = ({state, setState, pagination, handlePagination}) => {
    const tags = useRef();
    const category = useRef();
    const image  = useRef();

    const [error, setError] = useState({
        image : "", 
        tags: "",
        category: ""
    })
    
    const handleTagsChange = (e) => {
        console.log(e)
        const array = [];
        e.map(item => {
            array.push(item.value);
        })

        setState(prevState => ({...prevState, tags: array}));
    }

    const handleCategoryChange = (e) => {
        console.log(e)
        const array = [];
        e.map(item => {
            array.push(item.value);
        })

        setState(prevState => ({...prevState, category: array}));
    }

    const inputValidation = (name, item) => {
        let value = "";
        if(!item)
                value = `Your ${name} is required.`;
        if(name === "tags" || name === "category" ){
            if(item.length === 0)
                value = `Your ${name} is required.`;
        }
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            tags: "", 
            image: "",
            category: ""
        })

        const tags = inputValidation("tags", state.tags) 
        const image = inputValidation("image", state.image);
        const category = inputValidation("category", state.category);

        if(image || category || tags)
            return false;
    
        return true;
    }

    const handleNext = () => {
        const result = formValidation();
        if(result)
            handlePagination(2);
    }

    const handleClickFile = () => {
        const input = document.getElementById('my-file');
        input.click();
        input.onchange = () => {
            setState(prevState => ( {...prevState, image: input.files[0] }));
        };
    }

    return(
        <div className = {styles.container}>
            <form className = {styles.form}>
                <input id="my-file" type="file" name="my-file" style={{ display: "none" }} accept = "image/*" />
                <>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Post category</div>
                        <div className = {styles.error}>{error.category}</div>
                        <MultiSelect
                            handleChange = {handleCategoryChange}
                            name = "category"
                            options = {categoriesOptions}
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Post tags</div>
                        <div className = {styles.error}>{error.tags}</div>
                        <MultiSelect
                            handleChange = {handleTagsChange}
                            name = "tags"
                            options = {tagsOptions}
                        />
                    </div>
                    <div className = {styles.col}>
                        <div className = {styles.label}>Post Cover</div>
                        <div className = {styles.error}>{error.image}</div>
                        <div onClick = {handleClickFile} className = {styles.image_upload_wrap}>
                            <div className = {styles.drag_text}>
                                <h3>
                                    {
                                        state.image ? 
                                            (
                                                <> {state.image.name} <br/> </>
                                            ) : (
                                            <>
                                                Drag and drop a file<br/> Or <br/>
                                            </>
                                        )
                                    }
                                    {
                                        state.image ? (
                                            <span>Browse another file</span>
                                        ): (
                                            <span>Browse a file</span>
                                        )
                                    }
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.btnContainer}>
                        {
                            pagination == 1? (
                                <>
                                    <div onClick = {()=>handlePagination(0)} className = {styles.btn}>
                                        Previous
                                    </div>
                                    <div onClick = {()=>handleNext()} className = {styles.btn}>
                                        Next
                                    </div>
                                </>
                            ): null
                        }
                    </div>
                </>
            </form>
        </div>
    )
}

export default Attachment;