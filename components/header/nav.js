import Link from "next/link"
import styles from "../../styles/Nav.module.css";

const Nav = () => (
    <div className = {styles.container}>
        <div className = {styles.nav}>
            <div className = {styles.item}>
                <Link href="/">
                    <a>HOME</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/beauté">
                    <a>BEAUTÉ</a>
                </Link>
            </div> 
            <div className = {styles.item}>
                <Link href="/mode">
                    <a>MODE</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/société">
                    <a>SOCIÉTÉ</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/sexo">
                    <a>SEXO</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/jobs-et-études">
                    <a>JOBS ET ÉTUDES</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/lifestyle">
                    <a>LIFESTYLE</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/technologie">
                    <a>TECHNOLOGIE</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/bon-plan">
                    <a>BON PLANS</a>
                </Link>
            </div>
            <div className = {styles.nav_item}>
                <i className ="fas fa-moon"></i>
            </div>
        </div>
    </div>
)
export default Nav;