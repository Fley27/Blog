import Head from 'next/head'
import Banner from '../Banner'
import Activity from '../cards/activity';
import BarChart from "../chart/bar";
import SocialCard from '../cards/social-card';
import InboxCard from '../cards/inbox';
import TableUsers from '../table/latest-user';
import Header from '../general/header';
import styles from '../../styles/overview.module.css';

export default function Overview() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Overview</title>
                <meta name="description" content="Get the last activities" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <Banner/>
            <Header
                title = "Good Morning"
            />
            <div className = {styles.row}>
                <div className = {styles.row_item}>
                    <Activity
                        type = "danger"
                        description = "My blog posts"
                        label = "See more"
                        amout = "3,9K"
                        name = "Posts"
                    />
                </div>
                <div  className = {styles.row_item}>
                    <Activity
                        type = "success"
                        name = "Drafts"
                        label = "See more"
                        amout = "56"
                        description = "all drafts"
                    />
                </div>
            </div>
            <div className = {styles.transaction}>
                <div className = {`${styles.transaction_item} ${styles.chart}`}>
                    <BarChart
                        period = "Jan 2022"
                        title = "Total of Post per Category"
                    />
                </div>
                <div className = {`${styles.transaction_item} ${styles.card}`}>
                    <SocialCard
                        title = "Engagement on Social Media"
                    />
                </div>
            </div>
            <div className = {styles.transaction}>
                <div className = {`${styles.transaction_item} ${styles.chart}`}>
                    <TableUsers
                        title = "The Latest Users"
                    />
                </div>
                <div className = {`${styles.transaction_item} ${styles.card}`}>
                    <InboxCard/>
                </div>
            </div>
        </div>
    )
}