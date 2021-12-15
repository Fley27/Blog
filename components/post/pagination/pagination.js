import styles from "../../../styles/Pagination.module.css"

const Pagination = () => (
    <div className = {styles.container}>
        <div className = {styles.arrow}>
            <i className ="fas fa-chevron-left"></i>
        </div>
        <div className = {styles.pagination}>
            <div className = {styles.item}>01</div>
            <div className = {styles.item}>02</div>
            <div className = {styles.selected}>03</div>
            <div className = {styles.item}>...</div>
            <div className = {styles.item}>20</div>
        </div>
        <div className = {styles.arrow}>
            <i className ="fas fa-chevron-right"></i> 
        </div>
    </div>   
)

export default Pagination;