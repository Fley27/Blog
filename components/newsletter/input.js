import React, {useState, useRef} from "react";
import styles from "../../styles/Input-newsletter.module.css"

const Input = ({isDark}) => {
    const [state, setState] = useState({
        email : ""
    })

    const [error, setError] = useState({
        email : "",
    })

    const email = useRef();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }

    const emailValidation = (email) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true
        }
        return false
    }

    const inputValidation = (name, item) => {
        let value = "";
        if(name === "lastName" || name === "firstName"){
            if(!item)
                value = `Your ${name} is required.`;
        }
        else if(name === "password"){
            if(item.length < 8)
                value = "Must be at least 8 characters long."
        }
        else if(name === "email"){
            if(!emailValidation(item))
                value = "Enter a valid email address.";
        }
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            email : "",
        })

        const email = inputValidation("email", state.email) 

        if(email)
            return false;
    
        return true;
    }

    const handleSubmit = () => {
        const status = formValidation()
        if(status) {
            //props.signUp(JSON.stringify(state))
        }
    }

    return(
        <div className = {styles.container}>
            {
                error.email ? (
                    <div className = {styles.error}>{error.email}</div>
                ): null
            }
            <div className = {styles.newsletter}>
                <input  onChange = {handleChange} ref = {email}  placeholder = "johndoe@gmail.com" className = {error.email ? styles.error_input : styles.input} name = "email" type = "email"/>
                <button onClick = {()=>handleSubmit()} className = {styles.btn}>
                    <span><i className ="fas fa-long-arrow-alt-right"></i></span>
                </button>
            </div>
        </div>  
    )
}

export default Input;