import styles from "../../styles/header-general.module.css"

export default function Header ({title}){
    return (
        <div className = {styles.header}>
                <div className = {styles.title}>{title}</div>
                <div className = {styles.col}>
                    <select 
                        className = {styles.input} 
                        name = "industry" 
                    >
                        <option value="last-week">Last Week</option>
                        <option value="last-month">Last Month</option>
                        <option value="last-year">Last Year</option>
                    </select>
                </div>
            </div>
    )
}