import Head from 'next/head'
import Header from '../components/header/header'
import LisItem from '../components/post/list/list-items'
import styles from '../styles/Home.module.css'


export default function Technologie() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Solipresse || Mode</title>
                <meta name="description" content="Soli-Ecriture || On met le monde à nue grâce à l'écriture." />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
            <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
                crossOrigin="anonymous"/>
            </Head>

            <main className={styles.main}>
                <Header
                    label = "Technologie"
                />
                <LisItem
                    route = "technologie"
                />
            </main>
        </div>
    )
}
