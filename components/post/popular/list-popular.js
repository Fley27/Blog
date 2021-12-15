import Post from "./popular";
import Title from "../../sidebar/header";
import styles from "../../../styles/List-popular.module.css"

const List = () => (
    <div className = {styles.container}>
        <Title
            text = "Popular Posts"
        />
        <div className = {styles.list}>
            <Post
                title = "Space The Final Frontier"
                posted = "1 day ago"
            />
            <Post
                title = "The Amazing Hubble"
                posted = "3 days ago"
            />
            <Post
                title = "Anastromy Or Astrology"
                posted = "4 weeks ago"
            />
            <Post
                title = "Ateroids telescope"
                posted = "8 months ago"
            />
        </div>
    </div>  
)

export default List;