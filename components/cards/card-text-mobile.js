import dateFormat  from "dateformat";
import styles from "../../styles/Card-text-mobile.module.css"

const CardText = (props) => (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.category}>{props.category}</div>
            <div className = {styles.item}>
                <div className = {styles.date}><span><i className="fas fa-calendar-alt"></i></span>{dateFormat(props.date, " mmmm dd, yyyy")}</div>
            </div>
        </div>
        <div className = {styles.body}>
            <div onClick = {() => window.location.href = props.link} className = {styles.title}>{props.title}</div>
            <div className = {styles.description}>{props.description}</div>
        </div>
    </div>
)

export default CardText;