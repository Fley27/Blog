import styles from "../../styles/Title-sidebar.module.css"

const Title = ({text, light}) => (
    <div className = {styles.container}>
        {
            light ? "" : (
                <div className =  {styles.bar}></div>
            )
        }
        <div className = {!light ? styles.label : styles.label_}>
            {text}
        </div>
    </div>  
)

export default Title;