import Image from "next/image";
import image from "../../images/3298067.jpg"
import styles from "../styles/error.module.css"

export default function Empty ({isPage, title}) {
    return(
        <div className = {`${styles.container} ${isPage ? styles.isPage : null}`}>
            <div className = {styles.title}>Oupsss ! <br/>Sorry any {title} were created recently...</div>
            <div className = {styles.image}>
                <Image
                    src= {image}
                    alt="Banner image"
                    layout = "fill"
                    placeholder = "blur"
                />
            </div>
        </div>
    )
}