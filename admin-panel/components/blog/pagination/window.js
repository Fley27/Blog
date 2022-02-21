import React, { useState, useLayoutEffect } from "react";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
import axios from "axios";
import { link } from "../../../../redux/consts";
import {PostSearch}  from "../../search/post"
const BlogPost = dynamic(() => import("../../blog/post/post"));
const Empty = dynamic(() => import("../../../error/empty"));
const BlogLoadind = dynamic(()=> import("../../loading/blog/index"))
import styles from "../../../styles/infinite-list.module.css"



function loadItems(page, nPerPage, token, state, search = "", isAvailaible = false, id, route, array = []) {
    return new Promise(async (resolve) => {

        let category = [], tag = [], sortBy = "", orderBy = "";

        state.category.map(item=> {
            if(item.isSelected)
                category.push(item.value.toLowerCase())
        })

        state.tag.map(item=> {
            if(item.isSelected)
                tag.push(item.value.toLowerCase())
        })

        state.orderBy.map(item=> {
            if(item.isSelected)
                orderBy = item.value.toLowerCase()
        })

        state.sortBy.map(item=> {
            if(item.isSelected)
                sortBy = item.value.toLowerCase()
        })

        const data = {
            pageNumber: page,
            nPerPage: nPerPage,
            category: category,
            tag: tag,
            sortBy: sortBy,
            orderBy: orderBy,
            search: search,
            isAvailable: isAvailaible,
            user: id
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "user": token
            },
        }

        const body = JSON.stringify(data);

        const res = await axios.post(`${link}/article/articles/${route}`,
            body,
            config
        )

        const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res.data;
        
        const nextArray = array.concat(articles);

        resolve({
            articles: nextArray,
            pageNumber: pageNumber,
            hasNextPage: hasNextPage, 
            numberTotalOfPage: numberTotalOfPage,
            nextPage: nextPage
        });
    });
}

function WindowPagination({ token, toggle, state, search, setState, setSearch, isAvailaible, ...props}) {
    const [pageNumber, setPageNumber] = useState(0);
    const [nPerPage, setNPerPage] = useState(3);
    const [articles, setArticles] = useState([]); 
    const [hasNextPage, setHasNextPage] = useState(true);
    const [numberTotalOfPage, setNumbreTotalOfPage] =  useState(0);
    const [nextPage, setNextPage] = useState(1);
    const [loading , setLoading] = useState(false)

    const { observe} = useInView({
        threshold: 0.25, // Default is 0
        onEnter:  ({ unobserve }) => {
            // Pause observe when loading data
            unobserve();
            // Load more data
            handleLoadMore(nextPage, articles)
        },
    });

    useLayoutEffect(() => {
        handleLoadMore(pageNumber);
    }, [])

    const handleLoadMore = (page, array = []) => {
        loadItems(page, nPerPage, token, state, search, isAvailaible, props.id, props.route, array).then(res => {
            const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res;
            setArticles(articles);
            setPageNumber(pageNumber);
            setHasNextPage(hasNextPage);
            setNumbreTotalOfPage(numberTotalOfPage);
            setNextPage(nextPage);
            setLoading(true)
        });
    }

    const handleOnClick = () =>{
        handleLoadMore(0)
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className = {`${styles.container} ${toggle ? styles.hidden : ""}`} >
            {
                articles.length ?
                    <PostSearch
                        state = {state}
                        setState = {setState}
                        handleChange  = {handleChange}
                        handleOnClick = {handleOnClick}
                        search = {search}
                        status = "blog"
                    /> : null
            }
            {
                articles.map((item, idx)=>
                    <div  ref = {idx === articles.length - 1 ? observe : null} key = {idx} className = {styles.post}>
                        <BlogPost
                            title = {item.title}
                            description = {item.description}
                            img = {`http://localhost:4000/${item.image_docs.path}`}
                            category = {item.category[0]}
                            id = {item._id}
                            link = {`/admin/blog/${item._id}`}
                        />
                    </div>
                )
            }
            {
                !articles.length && loading ? <Empty
                    title = "posts"
                /> : null
            }
            {
                !articles.length && !loading ? <BlogLoadind/> : null
            }
        </div>
    );
}

export default WindowPagination;

// 300 185 5572
