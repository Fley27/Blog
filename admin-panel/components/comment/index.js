import Image from "next/image";
import dateFormat from "dateformat";
import image from "../../../images/white-woman.jpeg";
import styles from "../../styles/comment.module.css"

const Comment = ({name, content, date, index, handleSelected}) => (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.image}>
                <Image
                    src= {image}
                    alt="Picture of the author"
                    layout = "fill"
                    placeholder = "blur"
                    unoptimized
                />
            </div>
            <div className = {styles.perso_info}>
                <div className = {styles.name}>{name}</div>
                <div className = {styles.date}>{dateFormat(date, "mm-dd-yyyy")}</div>
            </div>
        </div>
        <div className = {styles.comment}>{content}</div>
        <div onClick = {() => handleSelected(index, name)} className = {styles.reply}>Reply</div>
    </div>
)

export default Comment