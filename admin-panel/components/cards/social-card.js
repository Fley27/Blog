import DoughnutChart from "../chart/doughnut";
import styles from "../../styles/social-media-card.module.css"


const SocialCard = ({title, number}) => (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.title}>{title}</div>
        </div>
        <div className = {styles.body}>
            <div className = {styles.item}>
                <DoughnutChart/>
            </div>
        </div>
        <div className = {styles.footer}>
                <div className = {styles.label}>
                    See more {"   "} <span><i className="fas fa-arrow-right"></i></span>
                </div>
        </div>
    </div>
)

export default SocialCard;