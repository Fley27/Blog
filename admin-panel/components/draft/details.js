import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getArticle, approvedArticle, removedArticle } from "../../../redux/actions/post";
import PostCategory from "../elements/post-category";
import PostTag from "../elements/post-tag";
import DraftBottom from "./bottom";
import Modal from "../editor/modal"
import styles from "../../styles/draft-details.module.css";

const Draft = (props) => {
    
    const [state, setState] = useState();
    const [toggle, setToggle] = useState(false);
    const [pagination, setPagination] =  useState(0);
    const [action, setAction] = useState("")
    const [edit, setEdit] = useState({
        title: "",
        description: "",
        image: null,
        content: null,
        category: [],
        tags: [],
        post: "",
    })

    const handlePagination = (index) => { 
        console.log(index);
        setPagination(index)
    }

    const handleToggle = (status) => {
        setToggle(status);
    }

    const handleAction = (action) => {
        setAction(action)
    }

    useEffect(() => {
        props.getArticle(props.id)
    }, [])

    useEffect(() => {
        if(props.post.isUpdate)
            window.location.href =  "/admin/drafts";
        setState(props.post.article);
    }, [props])

    const myLoader=({src})=>{
        return `${`http://localhost:4000/${state.image.path}`}`;
    }

    const removed = () =>{
        props.removedArticle(props.auth.token, props.id);
    }

    return(
        <div className = {`${styles.container} ${toggle ? styles.hidden : ''}`}>
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
            <div className = {styles.post}>
                {
                    state ? (
                        <>
                            <div className = {styles.header}>
                                <div className = {styles.image}>
                                    <Image
                                        loader = {myLoader}
                                        src= {"http://localhost:4000/"+state.image.path}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                        blurDataURL = {"http://localhost:4000/"+state.image.path}
                                        unoptimized
                                    />
                                </div>
                                <div className = {styles.title}>{state.title}</div>
                                <div className = {styles.category}>
                                    {
                                        state.category.map((value, idx) => (
                                            <PostCategory 
                                                key = {idx}
                                                value = {value}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className = {styles.content}
                                dangerouslySetInnerHTML={{ __html: state.content }}
                            />

                            <div className = {styles.footer}>
                                <div className = {styles.tags}>
                                    {
                                        state.tags.map((value, idx) => (
                                            <PostTag
                                                key = {idx}
                                                value = {value}
                                            />
                                        ))
                                    }
                                </div>
                                <DraftBottom
                                    removedArticle = {removed}
                                    handleToggle = {handleToggle}
                                    handleAction = {handleAction}
                                />
                            </div>
                        </>
                    ): null
                }
            </div>
            {
                toggle ? (
                    <Modal
                        state = {edit}
                        setState = {setEdit}
                        toggle = {toggle}
                        setToggle = {setToggle}
                        handleToggle = {handleToggle}
                        pagination = {pagination}
                        handlePagination = {handlePagination}
                        action = {action}
                        approvedArticle = {props.approvedArticle}
                        id = { props.id }
                        token = {props.auth.token}
                    />
                ):null
            }
        </div>
    )
}


Draft.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    getArticle: PropTypes.func.isRequired,
    approvedArticle: PropTypes.func.isRequired,
    removedArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
});


export default connect(mapStateToProps, {getArticle, approvedArticle, removedArticle})(Draft);