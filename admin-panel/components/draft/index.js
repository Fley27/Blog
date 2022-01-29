import React, {useState, useEffect} from "react";
import Head from "next/head";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import BlogPost from "../blog/post/post";
import { draftsArticles } from "../../../redux/actions/post";
import styles from "../../styles/blog.module.css";

const Draft = (props) => {
    
    const [state, setState] = useState([]);

    useEffect(() => {
        props.draftsArticles(props.auth.token)
    }, [])

    useEffect(() => {
        setState(props.post.drafts);
    }, [props])

    return(
        <div className = {styles.container}>
            <Head>
                <title>Draft</title>
                <meta name="description" content="Solipresse" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
                crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
                <meta charset="utf-8" />            
            </Head>
            <div className = {styles.posts}>
                {
                    state.map((item, idx)=>
                        <div key = {idx} className = {styles.post}>
                            <BlogPost
                                title = {item.title}
                                description = {item.description}
                                img = {`http://localhost:4000/${item.image.path}`}
                                category = {item.category[0]}
                                link = {`/admin/drafts/${item._id}`}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}


Draft.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    draftsArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
});


export default connect(mapStateToProps, {draftsArticles})(Draft);