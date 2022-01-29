import React, {useState, useRef} from 'react'; 
import { Month, Day, Hour, Minute } from '../../../../data';
import styles from "../../../../styles/form.module.css"

const Form = ({state, setState, pagination, approvedArticle, token, id}) => {

    const year = useRef();

    const [error, setError] = useState({
        post: "", 
        month: "",
        day: "",
        year: "",
        hour: "",
        minute: "",
        date: ""
    })

    const [date, setDate]  = useState({
        day: "",
        month: "",
        year: ""
    })

    const [time, setTime] = useState({
        hour: "",
        minute: ""
    })

    const [currentDate, setCurrentDate]  = useState({
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const [currenTime, setCurrentTime] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
    })
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setState(prevState=>({...prevState, [name]: value}))
    }

    const handleDate = (e) => {
        const {name, value} = e.target;
        setDate(prevState=>({...prevState, [name]: value}))
    }

    const handleTime = (e) => {
        const {name, value} = e.target;
        setTime(prevState=>({...prevState, [name]: value}))
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
            post: "", 
            month: "",
            day: "",
            year: "",
            hour: "",
            minute: "",
            date: ""
        })

        const post = inputValidation("post", state.post);
        let month = "", day = "", hour = "", minute = "";

        if(state.post === "Scheduled"){
            month = inputValidation("month", date.month);
            day = inputValidation("day", date.day);
            hour = inputValidation("hour", time.hour);
            minute = inputValidation("minute", time.minute);

            if(month || day || hour || minute){
                setError(prevState => ({...prevState, date: "All fields are required."}))
            }
        }

        if( post || month || day || hour || minute)
            return false;
    
        return true;
    }

    const handleSubmit = () =>{
        const result = formValidation();
        if(result){
            alert("KK")
            const obj = {
                category: state.post,
                day: date.day,
                month: date.month,
                year: date.year ? date.year : currentDate.year,
                hour: time.hour,
                minute: time.minute
            }
            approvedArticle(token, id, JSON.stringify(obj))
        }
    }

    return(
        <div className = {styles.container}>
            <form className = {styles.form}>
                <div className = {styles.col}>
                    <div className = {styles.label}>Post</div>
                    <div className = {styles.error}>{error.post}</div>
                    <select 
                        onChange = {handleChange} 
                        className = {error.post ? styles.error_input : styles.input} 
                        name = "post" 
                    >
                        <option value="">Select...</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Scheduled">Scheduled</option>
                    </select>
                </div>
                {
                    state.post === "Scheduled" ? (
                        <div className = {styles.col}>
                            <div className = {styles.label}>Posted At</div>
                            <div className = {styles.error}>{error.date}</div>
                            <div className = {styles.row_container}>
                                <div className = {`${styles.roww} ${styles.date}`}>
                                    <div className = {styles.item}>
                                        <select 
                                            onChange = {handleDate} 
                                            className = {error.month ? styles.error_input : styles.input} 
                                            name = "month" 
                                        >
                                            <option value="">Month</option>
                                            {
                                                Month.map((item, idx) => 
                                                    currentDate.month <= item.index ?(
                                                        <option key = {idx} value= {item.index}>{item.name}</option>
                                                    ):null
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = {styles.item}>
                                        <select 
                                            onChange = {handleDate} 
                                            className = {error.day ? styles.error_input : styles.input} 
                                            name = "day" 
                                        >
                                            <option value="">Day</option>
                                            {
                                                Day.map((item, idx) => 
                                                    currentDate.day <= item.index ?(
                                                        currentDate.month === 1 && item.index <= 28 ?(
                                                            <option key = {idx} value= {item.index}>{item.name}</option>
                                                        ): currentDate.month === 1 && item.index > 28 ? null : (
                                                            <option key = {idx} value= {item.index}>{item.name}</option>
                                                        )
                                                    ):null
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = {styles.item}>
                                        <select 
                                            onChange = {handleDate} 
                                            className = {error.year ? styles.error_input : styles.input} 
                                            name = "year" 
                                        >
                                            <option value= {currentDate.year}>{currentDate.year}</option>
                                            {
                                                currentDate.month === 11 ? (
                                                    <option value= {currentDate.year + 1}>{currentDate.year + 1}</option>
                                                ): null
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className = {`${styles.roww} ${styles.time}`}>
                                    <div className = {styles.item}>
                                        <select 
                                            onChange = {handleTime} 
                                            className = {error.hour ? styles.error_input : styles.input} 
                                            name = "hour" 
                                        >
                                            <option >Hour</option>
                                            {
                                                Hour.map((item, idx) => 
                                                    currenTime.hour <= item.index ?(
                                                        <option key = {idx} value= {item.index}>{item.name}</option>
                                                    ):null
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = {styles.item}>
                                        <select 
                                            onChange = {handleTime} 
                                            className = {error.minute ? styles.error_input : styles.input} 
                                            name = "minute" 
                                        >
                                            <option value= {date.year}>Minute</option>
                                            {
                                                Minute.map((item, idx) => 
                                                    currenTime.minute <= item.index ?(
                                                    <option key = {idx} value= {item.index}>{item.name}</option>
                                                ):null
                                            )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ): null
                }
                <div className = {styles.btnContainer}>
                    {
                        pagination ? null : (
                            <div onClick = {()=> handleSubmit()} className = {styles.btn}>
                                Submit
                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default Form;