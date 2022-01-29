import Image from "next/image";
import styles from "../../../styles/blog-post.module.css";

const BlogPost = ({img, title, description, category, link}) =>{

    const myLoader=({src})=>{
        return `${img}`;
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.image}>
                <Image
                    loader = {myLoader}
                    src= {img}
                    alt="Picture of the author"
                    layout = "fill"
                    placeholder = "blur"
                    blurDataURL = {img}
                    unoptimized
                />
            </div>
            <div className = {styles.card}>
                <div className = {styles.row}>
                    <div className = {styles.item_left}>
                        <div className = {styles.icon}><i className="fas fa-bolt"></i></div>
                        <div className = {styles.label}>{category}</div>
                    </div>
                </div>
                <div onClick = {() => window.location.href = link} className = {styles.title}>{title}</div>
                <div className = {styles.description}>{description}</div>
                <div className = {styles.row}>
                    <div className = {styles.item}>
                        <div className = {styles.date}><span><i className="fas fa-calendar-alt"></i></span> 04/19/2021</div>
                        <div className =  {styles.comment}><span><i className="far fa-comment"></i></span> 05</div>
                        <div className = {styles.comment}><span><i className="far fa-heart"></i></span>  10</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;