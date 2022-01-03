import Image from "next/image";
import Square from "../../shapes/square";
import styles from "../../styles/topbar.module.css"
import img from "../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"

const Topbar = (props) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.scope}>
                <div className = {styles.logo}>Solipresse</div>
                <div className = {styles.menu}>
                    <div onClick = {props.handleToggle} className = {styles.bars}>
                        <div className = {styles.bar}></div>
                        <div className = {styles.bar}></div>
                        <div className = {styles.bar}></div>
                    </div>
                </div>
                <Square
                    left = "#ff6e40"
                    right = "#fff"
                />
                <div className  = {styles.pageTitle}>
                    <div className = {styles.topBar}></div>
                    <div className = {styles.label}>{props.select}</div>
                </div>
                <Square
                    left = "#fff"
                    right = "#37474f"
                />
                <div className = {styles.quickleft}>
                    <div className  = {styles.item}>
                        <div className = {styles.badge}>5</div>
                        <div className = {styles.icon}><i className="far fa-envelope"></i></div>
                    </div>
                    <div className  = {styles.item}>
                        <div className = {styles.badge}>8</div>
                        <div className = {styles.icon}><i className="far fa-bell"></i></div>
                    </div>
                </div>
            </div>
            <div className = {styles.profile}>
                <div className = {styles.image}>
                    <Image
                        src= {img}
                        alt="Picture of the author"
                        layout = "fill"
                        placeholder = "blur"
                    />
                </div>
                <div className = {styles.profileStatus}></div>
            </div>
        </div>
    )
}

export default Topbar;