import { SearchInput } from "../search/search-input"
import styles from "../../styles/search.module.css"

export const Search = (props) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.tab}>
                <div onClick = {()=> props.handleSelect("All")} className = {`${styles.item} ${props.selected === "All" ? styles.selected : null}`}>
                    ALL
                </div>
                <div onClick = {()=> props.handleSelect("Completed")} className = {`${styles.item} ${props.selected === "Completed" ? styles.selected : null}`}>
                    Completed
                </div>
                <div onClick = {()=> props.handleSelect("Pending")} className = {`${styles.item} ${props.selected === "Pending" ? styles.selected : null}`}>
                    Pending
                </div>
            </div>
            <div className = {styles.search}>
                <SearchInput
                    handleChange  = {props.handleChange}
                    name = {props.name}
                />
            </div>
        </div>
    )
}