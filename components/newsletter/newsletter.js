import Title from "../sidebar/header";
import Input from "./input";
import styles from "../../styles/Newsletter.module.css"

const Newsletter = () => (
    <div className = {styles.container}>
        <Title
            text = "Newsletter"
        />
        <Input/>
    </div>  
)

export default Newsletter;