import styles from "../../styles/Card-text-most-rated.module.css"

const CardText = () => (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.category}>Holidays</div>
            <div className = {styles.item}>
                <div className = {styles.date}><span><i className="fas fa-calendar-alt"></i></span> March 14, 2021</div>
                <div className =  {styles.comment}><span><i className="far fa-comment"></i></span> 05</div>
            </div>
        </div>
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