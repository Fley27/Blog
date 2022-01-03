import React, {useState} from "react";
import Head from "next/head";
import Topbar from "../components/header/topbar";
import Sidebar from "../components/header/sidebar";
import styles from "../styles/admin.module.css"

const Content = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [select, setSelect] = useState("dashboard");

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleSelect = (item) => {
        setSelect(item)
    }

    return(
        <div className = {styles.container}>
            <Head>
                <title>Solipresse</title>
                <meta name="description" content="SoliPresse || On met le monde à nue grâce à l'écriture." />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
                crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>
            <Topbar
                handleToggle = {handleToggle}
                select  = {select}
            />
            <div className = {styles.main}>
                <Sidebar
                    toggle = {toggle}
                    handleSelect = {handleSelect}
                    select = {select}
                />
                <div className = {toggle ? styles.pageWrapper_ : styles.pageWrapper}>{children}</div>
            </div>
        </div>
    )
}

export default Content;