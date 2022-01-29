import styles from "../../styles/post-tag.module.css"

const PostTag = ({value}) => (
    <div className = {styles.container}>
        <div className = {styles.icon}><i className="fas fa-hashtag"></i></div>
        <div className = {styles.label}>{value}</div>
    </div>
)

export default PostTag;