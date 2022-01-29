import React, {useState, useRef, useEffect} from 'react'; 
import Image from 'next/image';
import image from "../../../images/black-woman-modelo.jpeg" 
import styles from "../../styles/form-comment.module.css"

const Form = ({isReply, addComment, token, post, addReply, id, reply, comment_, name}) => {
    useEffect(() => {
        if(comment_ || reply)
            setState({
                comment: "",  
                row: 1
            })
        if(name) {
            const comment = `${name} ${state.comment}`;
            const row = 1 + state.row
            setState(prevState=>({...prevState, comment: comment, row: row}))
        }
    }, [reply, comment_, name])
    const comment = useRef();
    const [state, setState] = useState({
        comment: "",  
        row: 1
    })
    const [error, setError] = useState({
        title: "", 
        comment: "",
    }) 
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }

    const inputValidation = (name, item) => {
        let value = "";
        if(!item)
                value = `This field is required.`;
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            title: "", 
            comment: "",
        })
        const comment = inputValidation("comment", state.comment);

        if(comment)
            return false;
    
        return true;
    }

    const handleSubmit = () =>{
        const result = formValidation();
        const object = {};
        object.content = state.comment;
        object.post = post
        object.id = id;
        isReply ? addReply(token, JSON.stringify(object)) : addComment(token, JSON.stringify(object))
    } 


    const handleCommentKeyPress = (e) =>{
        if (e.key === 'Enter' && e.shiftKey)
                setState(prevState=> ({...prevState, row: state.row + 1}))
        else if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("comment", state.comment))
                handleSubmit()
        }
    }

    return(
        <div className = {`${styles.container} ${!isReply ? "" : styles.container_}`}>
            <form className = {styles.form}>
                <div className = {styles.item}>
                    <div className = {isReply ? styles.image : styles.image_}>
                        <Image
                            src= {image}
                            alt="Picture of the author"
                            layout = "fill"
                            placeholder = "blur"
                            unoptimized
                        />
                    </div>
                    <div className = {styles.col}>
                        <textarea 
                            onKeyPress = {handleCommentKeyPress} 
                            onChange = {handleChange} 
                            ref = {comment}  
                            placeholder = "Add a comment..." 
                            className = {error.comment ? styles.error_input : styles.input} 
                            name = "comment" 
                            rows = {state.row}
                            value = {state.comment}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;