import Head from 'next/head'
import BoxAnalytic from "./box"
import Header from '../general/header';
import LineChart from "../chart/line";
import UserPerCountry from "../table/user-per-country";
import styles from '../../styles/analytic.module.css';

export default function Analytic() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Analytic</title>
                <meta name="description" content="Get all lost data" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <Header
                title = "Analytics"
            />
            <div className = {styles.row}>
                <div className = {styles.row_item}>
                    <BoxAnalytic
                        type = "danger"
                        description = "Impression"
                        label = "See more"
                        amount = "1,9M"
                        period = "Today"
                        isExpandable = {true}
                    />
                </div>
                <div  className = {styles.row_item}>
                    <BoxAnalytic
                        type = "success"
                        period = "Monthly"
                        label = "31% since last month"
                        amount = "131,8K"
                        description = "Engagements"
                        isExpandable = {false}
                    />
                </div>
                <div  className = {styles.row_item}>
                    <BoxAnalytic
                        type = "danger"
                        period = "Anual"
                        label = "-5% since last month"
                        amount = "131,8K"
                        description = "Visitors"
                        isExpandable = {false}
                    />
                </div>
                <div  className = {styles.row_item}>
                    <BoxAnalytic
                        type = "danger"
                        period = "Weekly"
                        label = "-13% since last month"
                        amount = "131,8K"
                        description = "Read"
                        isExpandable = {false}
                    />
                </div>
            </div>
            <div className = {styles.transaction}>
                <div className = {`${styles.transaction_item} ${styles.chart}`}>
                    <LineChart
                        period = "Jan 2022"
                        title = "Total of Post per Category"
                    />
                </div>
                <div className = {`${styles.transaction_item} ${styles.card}`}>
                    <UserPerCountry
                        title = "User per Country"
                    />
                </div>
            </div>
        </div>
    )
}