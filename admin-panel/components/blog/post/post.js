import Image from "next/image";
import styles from "../../../styles/blog-post.module.css";

const BlogPost = ({img, title, description, category}) =>(
    <div className = {styles.container}>
        <div className = {styles.image}>
            <Image
                src= {img}
                alt="Picture of the author"
                layout = "fill"
                placeholder = "blur"
            />
        </div>
        <div className = {styles.card}>
            <div className = {styles.header}>
                <div className = {styles.category}>
                <div className = {styles.icon}><i className="fas fa-bolt"></i></div>
                    <div className = {styles.label}>{category}</div>
                </div>
                <div className = {styles.item}>
                    <div className = {styles.date}><span><i className="fas fa-calendar-alt"></i></span> 04/19/2021</div>
                    <div className =  {styles.comment}><span><i className="far fa-comment"></i></span> 05</div>
                </div>
            </div>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.description}>{description}</div>
        </div>
    </div>
)

export default BlogPost;