import Head from 'next/head'
import Header from '../components/header/header'
import Premier from '../components/articles/premier'
import LisItem from '../components/post/list/list-items'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solipresse || Home</title>
        <meta name="description" content="Soli-Ecriture || On met le monde à nue grâce à l'écriture." />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
        crossOrigin="anonymous"/>
      </Head>

      <main className={styles.main}>
        <Header
          label = "Home"
        />
        <Premier/>
        <LisItem/>
      </main>
    </div>
  )
}

/*
 <div className = {styles.most_rated}>
              <Card
                img = {blackWoman}              
              />
            </div>
            <div className = {styles.articles}>
              <div className = {styles.article}>
                <CardMobile
                  img = {singleFather}
                />
              </div>
              <div className = {styles.article}>
                <CardMobile
                  img = {blindMan}
                />
              </div>
            </div>
            <div className = {styles.most_rated}>
              <Card
                img  = {whiteWoman}
              />
            </div>
            <div className = {styles.articles}>
              <div className = {styles.article}>
                <CardMobile
                  img = {fashion}
                />
              </div>
              <div className = {styles.article}>
                <CardMobile
                  img = {youngWoman}
                />
              </div>
              <div className = {styles.article}>
                <CardMobile
                  img = {newGenarationOfDeveloper}  
                />
              </div>
              <div className = {styles.article}>
                <CardMobile
                  img = {stayNoToRacism}
                />
              </div>
            </div>
*/