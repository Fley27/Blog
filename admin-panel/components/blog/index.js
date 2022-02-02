import React, {useState} from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Head from "next/head";
import Modal from "./post/modal"; 
import Add from "./post/add";
import InfiniteList from "../infiniteList";
import { PostSearch } from "../search/post";
import { fetchArticles } from "../../../redux/actions/post";
import styles from "../../styles/blog.module.css";

const Blog = (props) => {

    const [state, setState] = useState({
        title: "",
        description: "",
        image: null,
        content: null,
        category: [],
        tags: []
    })

    const [toggle, setToggle] = useState(false);

    const [pagination, setPagination] =  useState();

    const handlePagination = (index) => {
        setPagination(index)
    }

    const handleToggle = (status) => {
        setToggle(status);
    }

    return(
        <div className = {toggle ? styles.container_ : styles.container}>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Solipresse" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
                crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
                <meta charset="utf-8" />            
            </Head>
            {
                !toggle ? (
                    <Add
                        handleToggle = {handleToggle}
                    />
                ): null
            }
            <PostSearch/>
            {
                props.id >= 0 ? (
                    <InfiniteList 
                        fetchArticles = {props.fetchArticles}
                        token = {props.auth.token}
                        page = {props.id}
                    />
                ):null
            }
            {
                toggle ? (
                    <Modal
                        state = {state}
                        setState = {setState}
                        toggle = {toggle}
                        setToggle = {setToggle}
                        handleToggle = {handleToggle}
                        pagination = {pagination}
                        setPagination = {setPagination}
                        handlePagination = {handlePagination}
                    />   
                ): null
            }
        </div>
    )
}


Blog.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    fetchArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
});


export default connect(mapStateToProps, {fetchArticles})(Blog);