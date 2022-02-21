import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import io from "socket.io-client"
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getArticle, approvedArticle } from "../../../redux/actions/post";
import { addComment, fetchComment, addReply } from "../../../redux/actions/comment";
import { like, unlike, isLike } from "../../../redux/actions/like";
import { linkSocket } from "../../../redux/consts";
import PostCategory from "../elements/post-category";
import PostTag from "../elements/post-tag";
import Comment from "../comment";
import Reply from "../comment/reply";
import Form from "../comment/form";
import styles from "../../styles/draft-details.module.css";


const socket = io.connect(linkSocket);

const Details = (props) => {
    
    const [state, setState] = useState();
    const [comment, setComment] = useState([])
    const [selected, setSelected] = useState(-1);
    const [isCollapsedIndex, setIsCollapsedIndex] = useState(-1);
    const [nameSelected, setNameSelected] = useState("");
    const [like, setLike] = useState({
        isliked: false,
        number: 0
    })

    useEffect(() => {
        props.getArticle(props.id);
        props.fetchComment(props.id);
        props.isLike(props.auth.token, props.id)

        socket.on("comment", data => {
            const {action} = data;
            
            if(action === "add")
                setComment(array => [...array, data.comment]);
            else if (action === "reply")
                setComment(data.comments)
        });

        socket.on("like", data => {
            const {action} = data;
            
            if(action === "addOrRemoved")
                setLike(prevState => ({...prevState, number: data.numberOfLike}));
        });
    }, [])

    useEffect(() => {
        setState(props.post.article);
        setComment(props.comment.comments);
    }, [props.comment.comments,props.post.article ])


    useEffect(() => {
        if(props.comment.reply)
            setComment(props.comment.reply)
    }, [props.comment.reply])

    useEffect(() => {
        const {isLike, likes} = props.likeState;
        console.log(JSON.stringify(props.likeState));
        setLike({number: likes, isliked: isLike}); 
    }, [props.likeState])

    const myLoader=({src})=>{
        return `${`http://localhost:4000/${state.image.path}`}`;
    }

    const handleSelected = (item, name) =>{
        setSelected(item);
        setNameSelected(`${name}`)
        setIsCollapsedIndex(item);
    }

    const handleIsCollapse = (item) =>{
        setSelected(item);
        setIsCollapsedIndex(item);
    }

    return(
        <div className = {styles.container}>
            <Head>
                <title>Details</title>
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
                            </div>

                            <div className = {styles.interaction}>
                                <div className = {styles.bottom_bar}></div>
                                <div className = {styles.box}>
                                    <div onClick = {() => props.like(props.auth.token, props.id)} className = {`${styles.item} ${like.isliked ? styles.isliked : ``}`}>
                                        <i className="far fa-heart"></i> {like.number > 0 && like.number < 10 ? `0${like.number}` : like.number}{" "} like{like.number > 1 ? "s": ""}</div>
                                    <div className = {styles.item}><i className="far fa-comment"></i> {" "} {(comment.length)  < 10 ? `0${comment.length}` : comment.length } comments</div>
                                    <div className = {styles.share}>
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fab fa-tiktok"></i>
                                    </div>
                                </div>
                            </div>

                            <div className = {styles.comment}>
                                {
                                    comment.map((item, idx) => (
                                        <>
                                            <Comment
                                                key = {idx}
                                                name = {""+item.user.firstName + " " + item.user.lastName}
                                                date = {item.date}
                                                content = {item.content}
                                                index = {idx}
                                                handleSelected = {handleSelected}
                                                
                                            />
                                            {
                                                item.reply ? item.reply.length ? (
                                                        isCollapsedIndex === idx ? (
                                                            <div className = {styles.reply}>
                                                                {   
                                                                    item.reply ? 
                                                                    item.reply.map((item, index) => (
                                                                        <Reply
                                                                            key = {index}
                                                                            name = {item.nameOfUser}
                                                                            date = {item.date}
                                                                            content = {item.content}
                                                                            index = {idx}
                                                                            handleSelected = {handleSelected}
                                                                        />
                                                                    )): null 
                                                                }
                                                                
                                                            </div>
                                                        ): (
                                                            <div onClick = {() => handleIsCollapse(idx)} className = {styles.collapsed_replies}>
                                                                Have {item.reply.length} {item.reply.length < 2 ? "reply" : "replies"} {" "} {isCollapsedIndex === idx ? (
                                                                    <i className="fal fa-angle-up"></i> 
                                                                ) : <i className="fal fa-angle-down"></i>}
                                                            </div>
                                                        ) 
                                                
                                                    ): (
                                                        null
                                                    ) : null
                                                }
                                                <div className = {styles.reply}>
                                                    {
                                                        idx === selected ?(
                                                            <Form
                                                                isReply = {true}
                                                                token = {props.auth.token}
                                                                post = {props.id}
                                                                addReply = {props.addReply}
                                                                id = {item._id}
                                                                reply = {props.comment.reply}
                                                                comment_ = {props.comment.comment}
                                                                name = {nameSelected}
                                                            />
                                                        ): null
                                                    }
                                                </div>
                                            </>
                                    ))
                                }
                            </div>
                            
                            <div id = "#comment" className = {styles.form}>
                                <Form
                                    isReply = {false}
                                    addComment = {props.addComment}
                                    token = {props.auth.token}
                                    post = {props.id}
                                    reply = {props.comment.reply}
                                    comment_ = {props.comment.comment}
                                />
                            </div>
                        </>
                    ): null
                }
            </div>
        </div>
    )
}

Details.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
    getArticle: PropTypes.func.isRequired,
    approvedArticle: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    fetchComment: PropTypes.func.isRequired,
    addReply: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired,
    unlike: PropTypes.func.isRequired,
    isLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post,
    comment: state.comment,
    likeState: state.like
});


export default connect(mapStateToProps, {getArticle, approvedArticle, addComment, fetchComment, addReply, like, unlike, isLike})(Details);