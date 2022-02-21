import React, {useState, useEffect, useRef} from "react";
import useInView from "react-cool-inview";
import { connect } from "react-redux";
import PropTypes, { array } from "prop-types"
import Post from "../cards/card-mobile";
import { fetchSimilarsArticles} from "../../redux/actions/post";
import styles from "../../styles/More-Content.module.css"

const MoreContent = (props) => {
    const [articles, setArticles] = useState([]); 
    const post = useRef();

    const { observe, inView} = useInView({
        threshold: 0.25, // Default is 0
        onEnter:  ({ unobserve }) => {
            // Pause observe when loading data
            unobserve();
        }, 
    });
    useEffect(()=>{
        props.fetchSimilarsArticles(JSON.stringify(props.body))
    }, [])

    useEffect(()=>{
        setArticles(props.post.articles);
    }, [props.post.articles])

    return(
        <div ref = {observe} className = {styles.container}>
            {
                inView ? (
                    <>
                        <div className = {styles.title}>PLUS DE CONTENUS {props.tag.toUpperCase()}</div>
                        <div className = {`${styles.posts} ${articles.length ? styles.show : ""}`}>
                            {
                                articles.length && articles.map((item, idx)=>
                                        <div ref = {post}  key = {idx.toString()} className = {`${styles.post}`}>
                                            <Post
                                                title = {item.title}
                                                description = {item.description}
                                                img = {`https://solipresse.herokuapp.com/${item.image.path}`}
                                                category = {item.category[0]}
                                                id = {item._id}
                                                link = {`/${item._id}`}
                                                date = {item.date}
                                            />
                                        </div>       
                                )
                            }
                        </div>
                    </>
                ):null
            }
        </div>
    )
}

MoreContent.propTypes = {
    post: PropTypes.object.isRequired,
    fetchSimilarsArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, {fetchSimilarsArticles})(MoreContent);