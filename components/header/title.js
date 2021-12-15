import styles from "../../styles/Title.module.css";

const Title = ({title, category}) => (
    <div className = {styles.container}>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.bar}></div>
        <div className =  {styles.category}>{category}</div>
    </div>
)

export default Title;