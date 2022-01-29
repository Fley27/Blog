import React, {useState} from "react";
import Image from "next/image";
import banner from "../../../images/3808949.jpg"
import styles from "../../styles/banner.module.css"


const type = "new";
const Banner = () => {

    const [hidden, setHidden] = useState(false);

    const handleHidden = () => {
        setHidden(!hidden)
    }

    return(
        <div className = {`${styles.container} ${hidden ? styles.hidden : ""}`}>
            <div className = {`${styles.item} ${styles.image}`}>
                <Image
                    src= {banner}
                    alt="Banner image"
                    layout = "fill"
                    placeholder = "blur"
                />
            </div>
            <div className = {`${styles.item} ${styles.area}`}>
                <div className = {`${styles.btn} ${type === "new" ? styles.new : styles.danger}`}>
                    New
                </div>
                <div className = {styles.message}>
                    <div className = {styles.title}>Welcome to Sole Magazine</div>
                    <div className = {styles.description}>Your dashboard has been improved! Explore new features like Notifications, Search, Jobs Platform and more.</div>
                </div>
                <button onClick = {()=> handleHidden()} className = {`${styles.btn} ${styles.dismiss} ${type === "new" ? styles.new : styles.danger}`}>Dismiss Banner</button>
            </div>
            <div className = {styles.overlay}></div>
        </div>
    )
}
export default Banner