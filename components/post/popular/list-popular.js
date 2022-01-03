import Post from "./popular";
import Title from "../../sidebar/header";
import styles from "../../../styles/List-popular.module.css"
import blackWoman from "../../../images/black-woman-modelo.jpeg"
import whiteWoman from "../../../images/white-woman.jpeg"
import singleFather from  "../../../images/single-father.jpeg"
import blindMan from "../../../images/blind-man.jpeg"
import fashion from "../../../images/fashion.jpeg"
import youngWoman from "../../../images/young-woman.jpeg"

const List = () => (
    <div className = {styles.container}>
        <Title
            text = "Popular Posts"
        />
        <div className = {styles.list}>
            <Post
                title = "Space The Final Frontier"
                posted = "1 day ago"
                img = {blackWoman}
            />
            <Post
                title = "The Amazing Hubble"
                posted = "3 days ago"
                img = {singleFather}
            />
            <Post
                title = "Anastromy Or Astrology"
                posted = "4 weeks ago"
                img = {whiteWoman}
            />
            <Post
                title = "Ateroids telescope"
                posted = "8 months ago"
                img = {blindMan}
            />
            <Post
                title = "Ateroids telescope"
                posted = "8 months ago"
                img = {fashion}
            />
            <Post
                title = "Ateroids telescope"
                posted = "8 months ago"
                img = {youngWoman}
            />
        </div>
    </div>  
)

export default List;