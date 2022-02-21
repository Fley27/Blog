import styles from "../../styles/card.module.css"

const Card = ({title, subtitle, button, link}) => {
    const handleSwitch = () => {
        window.location.href = `/admin/auth/${link}`
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.subtitle}>{subtitle}</div>
            <button onClick = {()=>handleSwitch()} className = {styles.button}>{button}</button>
        </div>
    )
}

export default Card;