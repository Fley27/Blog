import Head from 'next/head'
import Header from '../components/header/header'
import Premier from '../components/articles/premier'
import Card from '../components/cards/card'
import CardMobile from '../components/cards/card-mobile'
import Right from '../components/sidebar/right'
import Pagination from '../components/post/pagination/pagination'
import Footer from '../components/footer/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Soli-Écriture</title>
        <meta name="description" content="Soli-Ecriture || On met le monde à nue grâce à l'écriture." />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
        crossOrigin="anonymous"/>
      </Head>

      <main className={styles.main}>
        <Header/>
        <Premier/>
        <div className = {styles.body}>
          <div className = {styles.blog}>
            <div className = {styles.most_rated}>
              <Card/>
            </div>
            <div className = {styles.articles}>
              <div className = {styles.article}>
                <CardMobile/>
              </div>
              <div className = {styles.article}>
                <CardMobile/>
              </div>
            </div>
            <div className = {styles.most_rated}>
              <Card/>
            </div>
            <div className = {styles.articles}>
              <div className = {styles.article}>
                <CardMobile/>
              </div>
              <div className = {styles.article}>
                <CardMobile/>
              </div>
              <div className = {styles.article}>
                <CardMobile/>
              </div>
              <div className = {styles.article}>
                <CardMobile/>
              </div>
            </div>
            <Pagination/>
          </div>
          <div className = {styles.right_sidebar}>
            <Right/>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  )
}
