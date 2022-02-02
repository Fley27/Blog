import styles from "../../styles/listing-item.module.css"

export const ListingItem = ({type, value, item, handleUnselect, action, state}) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
                <span className = {styles.type}>{type}:</span>
                <span className = {styles.value}>{value}</span>
                <span onClick = {()=> handleUnselect(item, state, action)} className = {styles.icon}><i className="fas fa-times-circle"></i></span>
            </div>
        </div>
    )
}
