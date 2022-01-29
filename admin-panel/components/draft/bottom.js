import styles from "../../styles/draft-bottom.module.css"

const DraftBottom = ({removedArticle, handleToggle, handleAction}) => (
    <div className = {styles.container}>
        <button onClick = {removedArticle} className =  {styles.btn}>
            <i className="far fa-thumbs-down"></i> {"   "} Unapproved
        </button>
        <button onClick = {() => {
                handleAction("edit")
                handleToggle(true)
            }} className =  {styles.btn}>
            <i className="far fa-grin-beam-sweat"></i> {"   "} Edit
        </button>
        <button
            onClick = {() => {
                handleAction("approved")
                handleToggle(true)
            }}
            className =  {styles.btn}
        >
            <i className="far fa-thumbs-up"></i> {"   "} Approved
        </button>
    </div>
)

export default DraftBottom;