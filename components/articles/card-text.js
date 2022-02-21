import styles from "../../styles/Card-text.module.css"

const CardText = (props) => (
    <div className = {styles.container}>
        <div className = {styles.body}>
            <div className = {styles.title}>{props.title}</div>
            <div className = {styles.description}>{props.description}</div>
        </div>
    </div>
)

export default CardText;