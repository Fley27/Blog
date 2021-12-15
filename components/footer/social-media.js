import Title from "../sidebar/header";
import styles from "../../styles/Social-media.module.css"

const Social = () =>(
    <div className = {styles.container}>
        <Title 
            text = "Follow Us"
            light = {true}
        />
        <div className = {styles.description}>
            Let us be social
        </div>
        <div className = {styles.social_media}>
            <div className = {styles.item}>
                <i className="fab fa-facebook-f"></i>
            </div>
            <div className = {styles.item}>
                <i className ="fab fa-linkedin"></i>
            </div>
            <div className = {styles.item}>
                <i className ="fab fa-twitter"></i>
            </div>
            <div className = {styles.item}>
                <i className ="fab fa-instagram"></i>
            </div>
        </div>
    </div>
)

export default Social;