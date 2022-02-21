import styles from "../../../styles//Card-Loading.module.css"
export default function PostLoading () {
    return( 
        <div className = {styles.container}>
            <div className = {styles.image}></div>
            <div className = {styles.card}>
                <div className = {styles.header}>
                    <div className = {styles.category}></div>
                    <div className = {styles.date}></div>
                </div>
                <div className = {styles.body}>
                    <div className = {styles.title}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className = {styles.description}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
} 