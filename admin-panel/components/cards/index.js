import styles from "../../styles/card.module.css"

const Card = ({title, subtitle, button, handleToggle}) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.subtitle}>{subtitle}</div>
            <button onClick = {()=>handleToggle()} className = {styles.button}>{button}</button>
        </div>
    )
}

export default Card;