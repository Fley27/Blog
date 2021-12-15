import styles from "../../styles/Card-text.module.css"

const CardText = () => (
    <div className = {styles.container}>
        <div className = {styles.body}>
            <div className = {styles.title}>Nest Protect: 2nd Gen Smoke + CO Alarm</div>
            <div className = {styles.description}>Loprem ipsum sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</div>
        </div>
        <button className = {styles.btn}>
            Read More
        </button>
    </div>
)

export default CardText;