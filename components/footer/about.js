import Title from "../sidebar/header";
import styles from "../../styles/About.module.css"

const About = () =>(
    <div className = {styles.container}>
        <Title 
            text = "About Us"
            light = {true}
        />
        <div className = {styles.description}>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit, sed do eiusmod tempor 
            incididunt ut labore dolore magna aliqua.
        </div>
    </div>
)

export default About