import Head from 'next/head'
import Header from '../components/header/header'
import Premier from '../components/articles/premier'
import Card from '../components/cards/card'
import CardMobile from '../components/cards/card-mobile'
import Right from '../components/sidebar/right'
import Pagination from '../components/post/pagination/pagination'
import Footer from '../components/footer/footer'
import styles from '../styles/Home.module.css'
import blackWoman from "../images/black-woman-modelo.jpeg"
import whiteWoman from "../images/white-woman.jpeg"
import singleFather from  "../images/single-father.jpeg"
import blindMan from "../images/blind-man.jpeg"
import fashion from "../images/fashion.jpeg"
import youngWoman from "../images/young-woman.jpeg"
import newGenarationOfDeveloper from "../images/new-generation-of-dev.jpeg"
import stayNoToRacism from "../images/stay-no-to-racism.jpeg"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solipresse</title>
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
