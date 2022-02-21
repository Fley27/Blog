import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Image from 'next/image'
import CardText from './card-text'
import { link } from '../../redux/consts';
import { getArticlePremiere } from '../../redux/actions/post';
import styles from "../../styles/Premier.module.css"

const Premier = (props) => {
    useEffect(() => {
        props.getArticlePremiere()
    }, [])
    return(
        <div className = {styles.container}>
            {
                props.post.article ? (
                    <>
                        <div className = {styles.article_image}>
                            <Image
                                src= {`http://localhost:4000/${props.post.article.image.path}`}
                                alt="Image"
                                layout = "fill"
                                placeholder = "blur"
                                blurDataURL = {`http://localhost:4000/${props.post.article.image.path}`}
                                unoptimized
                            />
                        </div>
                        <div className = {styles.overlay}></div>
                        <div className = {styles.card}>
                            <CardText
                                description = {props.post.article.description}
                                category = {props.post.article.category}
                                link = {link}
                                title =  {props.post.article.title}
                                date = {props.post.article.date}
                            />
                        </div>
                    </>
                ): null
            }
        </div>  
    )
}

Premier.propTypes = {
    getArticlePremiere: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, {getArticlePremiere})(Premier);