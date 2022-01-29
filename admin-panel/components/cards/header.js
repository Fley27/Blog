import styles from "../../styles/header-card.module.css"


const HeaderCard = ({title, period}) => (
    <div className = {styles.container}>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.period}>{period}</div>
    </div>
)

export default HeaderCard;