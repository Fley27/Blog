import { BasicDetailCard } from "../cards/basic-details"
import { DeleteDetailCard } from "../cards/delete"
import styles from "../../../../styles/details-tab.module.css"

export const DetailsTab = () => {
    return(
        <div className = {styles.container}>
            <BasicDetailCard/>
            <DeleteDetailCard/>
        </div>
    )
}