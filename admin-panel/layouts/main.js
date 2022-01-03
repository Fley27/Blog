import React from 'react';
import styles from "../styles/main-layout.module.css"

const MainLayout = ({ children }) => (
    <div className= {styles.main_container}>
        <div className= {styles.content_wrapper}>{children}</div>
    </div>
);

export default MainLayout;