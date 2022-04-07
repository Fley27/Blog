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
                <Link href="/beaute">
                    <a>BEAUTÉ</a>
                </Link>
            </div> 
            <div className = {styles.item}>
                <Link href="/societe">
                    <a>SOCIÉTÉ</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/sexo">
                    <a>SEXO</a>
                </Link>
            </div>
            <div className = {styles.item}>
                <Link href="/bon-plans">
                    <a>BON PLANS</a>
                </Link>
            </div>
        </div>
    </div>
)
export default Nav;