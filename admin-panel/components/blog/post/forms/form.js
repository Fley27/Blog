import React, {useState, useRef} from 'react'; 
import styles from "../../../../styles/form.module.css"

const Form = ({state, setState, pagination, handlePagination}) => {
    const title = useRef();
    const description = useRef();

    const [error, setError] = useState({
        title: "", 
        description: "",
    })
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }

    const inputValidation = (name, item) => {
        let value = "";
        if(!item)
                value = `Your ${name} is required.`;
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            title: "", 
            description: "",
        })

        const title = inputValidation("title", state.title);
        const description = inputValidation("description", state.description);

        if( title || description)
            return false;
    
        return true;
    }

    const handleNext = () => {
        const result = formValidation();
        if(result)
            handlePagination(1)
    }

    const handleTitleKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("title", state.title))
                description.current.focus();
        }
    }

    const handleDescriptionKeyPress = (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(!inputValidation("description", state.description))
                handlePagination(1)
        }
    }

    return(
        <div className = {styles.container}>
            <form className = {styles.form}>
                <div className = {styles.col}>
                    <div className = {styles.label}>Title</div>
                    <div className = {styles.error}>{error.title}</div>
                    <textarea 
                        onKeyPress = {handleTitleKeyPress} 
                        onChange = {handleChange} 
                        ref = {title}  
                        placeholder = "Lorem Ipsum ipsum lenguae secare bella consilum" 
                        className = {error.title ? styles.error_input : styles.input} 
                        name = "title" 
                        rows = "2"
                        value = {state.title}
                    />
                </div>
                <div className = {styles.col}>
                    <div className = {styles.label}>Description</div>
                    <div className = {styles.error}>{error.description}</div>
                    <textarea 
                        onKeyPress = {handleDescriptionKeyPress} 
                        onChange = {handleChange} 
                        ref = {description}  
                        placeholder = "Describe your issue with respect. Do not offense other people." 
                        className = {error.description ? styles.error_input : styles.input} 
                        name = "description" 
                        rows = "4"
                        value = {state.description}
                    />
                </div>
                <div className = {styles.btnContainer}>
                    {
                        pagination ? null : (
                            <div onClick = {()=> handleNext()} className = {styles.btn}>
                                Next
                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default Form;