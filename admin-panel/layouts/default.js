import styles from "../styles/default-layout.module.css"

const DefaultLayout = ({ children }) => (
    <div className= {styles.default_container}>
        <div className= {styles.main}>{children}</div>
    </div>
);

export default DefaultLayout;