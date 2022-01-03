import Head from 'next/head'
import Image from 'next/image'
import img from "../../images/premium.jpeg"
import CardText from './card-text'
import styles from "../../styles/Premier.module.css"

const Premier = () => (
    <div className = {styles.container}>
        <Head>
            <title>Create Next App</title>
        </Head>
        <div className = {styles.article_image}>
            <Image
                src= {img}
                alt="Picture of the author"
                layout = "fill"
                placeholder = "blur"
            />
        </div>
        <div className = {styles.overlay}></div>
        <div className = {styles.card}>
            <CardText/>
        </div>
    </div>  
)

export default Premier;