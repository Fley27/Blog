import Image from 'next/image'
import img from "../../../images/1.jpeg"
import styles from "../../../styles/Popular.module.css"

const Post = ({title, posted}) => (
    <div className = {styles.container}>
        <div className = {styles.post_image}>
            <Image
                src= {img}
                alt="Popular Post"
                layout = "fill"
                placeholder = "blur"
            />
        </div>
        <div className = {styles.description}>
            <div className = {styles.title}>
                {title}
            </div>
            <div className = {styles.posted}>{posted}</div>
        </div>
    </div>  
)

export default Post;