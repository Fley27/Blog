import Profile from './profile'
import List from '../post/popular/list-popular'
import Newsletter from '../newsletter/newsletter'
import Categories from '../post/category/list-category'
import styles from "../../styles/Right.module.css"
import Category from '../post/category/category'

const Right = () => (
    <div className = {styles.container}>
        <Profile/>
        <List/>
        <Newsletter/>
        <Categories/>
    </div>  
)

export default Right;