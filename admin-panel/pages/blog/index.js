import Blog from "../../components/blog";
import styles from "../../styles/blog.module.css"

const BlogPage = ({id}) => (
    <div className = {styles.container}> 
        <Blog
            id = {id}
        />
    </div>
)

export default BlogPage;