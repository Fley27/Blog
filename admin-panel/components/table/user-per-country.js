import HeaderCard from "../cards/header";
import styles from "../../styles/table-user.module.css"


const UserPerCountry = ({title}) => (
    <div className = {styles.container}>
        <HeaderCard 
                title = {title}
        />
        <div className = {styles.table}>
            <div className = {styles.header}>
                <div className = {styles.thead}>
                    <div className = {`${styles.th} ${styles.wider}`}>COUNTRY</div>
                    <div className = {`${styles.th} ${styles.wider}`}>NUMBER</div>
                    <div className = {`${styles.th}`}>SEO</div>
                    <div className = {`${styles.th}`}>Age</div>
                </div>
            </div>
            <div className = {styles.body}>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>United State</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>31,200</div>
                    <div className = {`${styles.th} ${styles.tb}`}>	40%</div>
                    <div className = {`${styles.th} ${styles.tb}`}>21,4</div>
                </div>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>Haiti</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>20,520</div>
                    <div className = {`${styles.th} ${styles.tb}`}>	25%</div>
                    <div className = {`${styles.th} ${styles.tb}`}>25,4</div>
                </div>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>France</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>50,200</div>
                    <div className = {`${styles.th} ${styles.tb}`}>	56%</div>
                    <div className = {`${styles.th} ${styles.tb}`}>21,4</div>
                </div>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>DR</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>56,200</div>
                    <div className = {`${styles.th} ${styles.tb}`}>	40%</div>
                    <div className = {`${styles.th} ${styles.tb}`}>26,4</div>
                </div>
                <div className = {styles.tbody}>
                    <div className = {`${styles.th} ${styles.tb} ${styles.wider}`}>Spain</div>
                    <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>13,200</div>
                    <div className = {`${styles.th} ${styles.tb}`}>	10%</div>
                    <div className = {`${styles.th} ${styles.tb}`}>23,4</div>
                </div>
            </div>
        </div>
        <div className = {styles.footer}>
                <div className = {styles.label}>
                    See more <span><i className="fas fa-arrow-right"></i></span>
                </div>
        </div>
    </div>
)

export default UserPerCountry;