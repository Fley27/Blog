import styles from "../../../styles/add.module.css";

const Add = ({handleToggle}) =>(
    <div onClick = {()=> handleToggle(true)} className = {styles.container}>
        <div className = {styles.label}>Create a Post</div>
    </div>
)

export default Add;