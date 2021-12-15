import styles from "../../../styles/Category.module.css"

const Category = ({category, postNumber}) => (
    <div className = {styles.container}>
        <div className = {styles.label}>{category}</div>
        <div className = {styles.number}>{postNumber}</div>
    </div>   
)

export default Category;