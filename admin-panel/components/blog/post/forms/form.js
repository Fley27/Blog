import React, {useState, useRef} from 'react'; 
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
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
        if(name === "title")
            item.length > 70 ? value = `Your ${name} has more than 70 characters` : null
        if(name === "description")
            item.length > 120 ? value = `Your ${name} has more than 120 characters` : null
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
                <div className = {`${styles.col}`}>
                    <div className = {styles.label}>Title</div>
                    <div className = {styles.error}>{error.title}</div>
                    <textarea 
                        onKeyPress = {handleTitleKeyPress} 
                        onChange = {handleChange} 
                        ref = {title}  
                        placeholder = "Lorem Ipsum ipsum lenguae" 
                        className = {`${styles.input}  ${error.title ? styles.error_input : ``} ${state.title.length >= 71 ? styles.input_over : ``}`} 
                        name = "title" 
                        rows = "2"
                        value = {state.title}
                    />
                    <div style={{ position: "relative", left: "97%", top: -40, width: 20, height: 20 }}>
                        <CircularProgressbar 
                            value={state.title.length * 1.4285714286} 
                            styles={
                                buildStyles({
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                
                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',
                                
                                    // Colors
                                    pathColor: `${state.title.length >= 60 ? "#ff2828" : "#287fff"}`,
                                    textColor: '#ff2828',
                                    trailColor: '#9cbcec',
                                    backgroundColor: '#3e98c7',
                                })
                            }
                        />
                    </div>
                </div>
                <div className = {styles.col}>
                    <div className = {styles.label}>Description</div>
                    <div className = {styles.error}>{error.description}</div>
                    <textarea 
                        onKeyPress = {handleDescriptionKeyPress} 
                        onChange = {handleChange} 
                        ref = {description}  
                        placeholder = "Describe your issue with respect. Do not offense other people." 
                        className = {`${styles.input}  ${error.description ? styles.error_input : ``} ${state.description.length >= 121 ? styles.input_over : ``}`} 
                        name = "description" 
                        rows = "4"
                        value = {state.description}
                    />
                    <div style={{ position: "relative", left: "97%", top: -60, width: 20, height: 20 }}>
                        <CircularProgressbar 
                            value={state.description.length / 1.83333333333} 
                            styles={
                                buildStyles({
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                
                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',
                                
                                    // Colors
                                    pathColor: `${state.description.length >= 110 ? "#ff2828" : "#287fff"}`,
                                    textColor: '#ff2828',
                                    trailColor: '#9cbcec',
                                    backgroundColor: '#3e98c7',
                                })
                            }
                        />
                    </div>
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