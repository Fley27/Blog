import Image from 'next/image'
import img from "../../images/2.webp"
import styles from "../../styles/Profile.module.css"

const Profile = () => (
    <div className = {styles.container}>
        <div className = {styles.profile}>
            <Image
                src= {img} 
                alt="Picture of the author"
                layout = "fill"
                placeholder = "blur"
            />
        </div>
        <div className = {styles.name}>
            Fenley Ménélas
        </div>
        <div className = {styles.title}>
            Engaged Writer
        </div>
        <div className = {styles.description}>
            Boot camps have its supporters andit sdetractors. 
            Some people do not understand why you should have 
            to spend money on boot camp when you can get. 
            Boot camps have itssuppor ters andits detractors.
        </div>
        <div className = {styles.social_media}>
            <div className = {styles.social_media_item}>
                <i className="fab fa-facebook-f"></i>
            </div>
            <div className = {styles.social_media_item}>
                <i className ="fab fa-linkedin"></i>
            </div>
            <div className = {styles.social_media_item}>
                <i className ="fab fa-twitter"></i>
            </div>
            <div className = {styles.social_media_item}>
                <i className ="fab fa-instagram"></i>
            </div>
        </div>
        <div className = {styles.bar}></div>
    </div>  
)

export default Profile;