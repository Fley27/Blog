import Link from "next/link"
import About from "./about";
import Newsletter from "./newsletter";
import Social from "./social-media";
import styles from "../../styles/Footer.module.css"

const Footer = () => (
    <footer className = {styles.container}>
        <div className = {styles.area}>
            <div className = {styles.item}>
                <About/>
            </div>
            <div className = {styles.item}>
                <Newsletter/>
            </div>
            <div className = {styles.item}>
                <Social/>
            </div>
        </div>
        <div className = {styles.copyright}>
            Copyright ©{new Date().getFullYear()} All rights reserved
        </div>
        <div className = {styles.developed}>
            Developed by {" "}
            <Link href="https://fenley.netlify.app/">
                <a target = "_blank">Fenley Menelas</a>
            </Link>
        </div>
    </footer>
)

export default Footer;