import styles from "../../styles/dropdown-button.module.css";

export const DropdownButton = (props) => {
    return(
        <div className = {styles.container}>
            <div onClick = {()=> props.handleToggle(props.action)} className = {styles.bt}>
                <span className = {styles.type}>{props.type}</span>
                <span className = {styles.icon}><i className="fas fa-angle-down"></i></span>
            </div>
            {
                props.toggle && props.state ? (
                    <div className = {styles.list}>
                        {
                            props.state.map((item, idx) => (
                                <div key = {idx} className = {styles.item}>
                                    <span onClick = {()=> props.handleSelected(item, props.state, props.action)} className = {`${styles.icon} ${item.isSelected ? styles.check : ""}`}>
                                        {
                                            item.isSelected ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>
                                        }
                                    </span>
                                    <span  className = {styles.type}>{item.label}</span>
                                </div>
                            ))
                        }
                    </div>
                ): null
            }
        </div>
    )
}
