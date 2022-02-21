import styles from "../../styles/post-category.module.css"

const PostCategory = ({value, isLight}) => (
    <div className = {`${styles.container} ${isLight ? styles.isLight : ``}`}>
        <div className = {styles.icon}><i className="fas fa-bolt"></i></div>
        <div className = {styles.label}>{value}</div>
    </div>
)

export default PostCategory;