import Nav from "./nav";
import NavMobile from "./nav-mobile";
import Title from "./title";
import styles from "../../styles/Header.module.css";

const Header = () => (
    <div className = {styles.container}>
        <Nav/>
        <Title 
            title =  "Solipresse"
            category = "Home"
        />
        <NavMobile 
            main_link = '/mode'
        />
    </div>
)

export default Header;