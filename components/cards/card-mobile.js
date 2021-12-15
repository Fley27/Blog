import Image from 'next/image'
import img from "../../images/1.jpeg"
import CardText from './card-text-mobile'
import styles from "../../styles/Card-mobile.module.css"

const Card = () => (
    <div className = {styles.container}>
        <div className = {styles.image}>
            <Image
                src= {img}
                alt="Picture of the author"
                layout = "fill"
                placeholder = "blur"
            />
        </div>
        <div className = {styles.card}>
            <CardText/>
        </div>
    </div>  
)

export default Card;