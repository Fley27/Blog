import styles from "../../styles/search-input.module.css"


export const SearchInput = () => (
    <div className = {styles.container}>
        <i className="fas fa-search"></i>
        <input placeholder = "Search...." type = "search"></input>
    </div>
)