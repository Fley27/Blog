import Title from "../sidebar/header";
import Input from "../newsletter/input";
import styles from "../../styles/About.module.css"

const Newsletter = () =>(
    <div className = {styles.container}>
        <Title 
            text = "Newsletter"
            light = {true}
        />
        <div className = {styles.description}>
            Stay updated with our latest trends
        </div>
        <Input
            isDark = {true}
        />
    </div>
)

export default Newsletter