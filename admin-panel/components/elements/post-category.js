import styles from "../../styles/post-category.module.css"

const PostCategory = ({value}) => (
    <div className = {styles.container}>
        <div className = {styles.icon}><i className="fas fa-bolt"></i></div>
        <div className = {styles.label}>{value}</div>
    </div>
)

export default PostCategory;