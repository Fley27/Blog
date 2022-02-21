import Image from 'next/image'
import CardText from './card-text-mobile'
import styles from "../../styles/Card-mobile.module.css"

const Card = ({img, title, description, category, link, date}) => (
    <div className = {styles.container}>
        <div className = {styles.image}>
            <Image
                src= {img}
                alt="Picture of the author"
                layout = "fill"
                placeholder = "blur"
                blurDataURL = {img}
                unoptimized
            />
        </div>
        <div className = {styles.card}>
            <CardText
                description = {description}
                category = {category}
                link = {link}
                title =  {title}
                date = {date}
            />
        </div>
    </div>  
)

export default Card;