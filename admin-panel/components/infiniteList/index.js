import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { link } from "../../../redux/consts";
import {PostSearch}  from "../search/post"
import BlogPost from "../blog/post/post";
import Pagination from "../../../components/post/pagination/pagination";
import styles from "../../styles/infinite-list.module.css"
import PropTypes from "prop-types";


function loadItems(page, nPerPage, token, state, search = "") {
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
            search: search
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "user": token
            },
        }

        const body = JSON.stringify(data);

        const res = await axios.post(`${link}/article/articles`,
            body,
            config
        )

        const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res.data;
        
        resolve({
            articles: articles,
            pageNumber: pageNumber,
            hasNextPage: hasNextPage, 
            numberTotalOfPage: numberTotalOfPage,
            nextPage: nextPage
        });
    });
}

function InfiniteList({ page, token, toggle, state, search, setState, setSearch}) {
    const [pageNumber, setPageNumber] = useState(parseInt(page));
    const [nPerPage, setNPerPage] = useState(6);
    const [articles, setArticles] = useState([]); 
    const [hasNextPage, setHasNextPage] = useState(true);
    const [numberTotalOfPage, setNumbreTotalOfPage] =  useState(0);
    const [nextPage, setNextPage] = useState(1);

    useLayoutEffect(() => {
        handleLoadMore(parseInt(page));
    }, [page || state])

    const handleLoadMore = (page) => {
        loadItems(page, nPerPage, token, state, search).then(res => {
            const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res;
            setArticles(articles);
            setPageNumber(pageNumber);
            setHasNextPage(hasNextPage);
            setNumbreTotalOfPage(numberTotalOfPage);
            setNextPage(nextPage)
        });
    }

    const handleOnClick = () =>{
        loadItems(0, nPerPage, token, state, search).then(res => {
            const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res;
            setArticles(articles);
            setPageNumber(pageNumber);
            setHasNextPage(hasNextPage);
            setNumbreTotalOfPage(numberTotalOfPage);
            setNextPage(nextPage)
        });
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className = {`${styles.container} ${toggle ? styles.hidden : ""}`} >
            <PostSearch
                state = {state}
                setState = {setState}
                handleChange  = {handleChange}
                handleOnClick = {handleOnClick}
                search = {search}
                status = "blog"
            />
            {
                articles.map((item, idx)=>
                    <div key = {idx} className = {styles.post}>
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
                numberTotalOfPage ? (
                    <div className = {styles.pagination}>
                        <Pagination
                            onLoadMore = {handleLoadMore}
                            page = {pageNumber}
                            numberTotalOfPage = {numberTotalOfPage}
                            hasNextPage = {hasNextPage}
                            nextPage = {nextPage}
                        />
                    </div>
                ): null
            }
        </div>
    );
}

InfiniteList.propTypes = {
    scrollContainer: PropTypes.oneOf(["window", "parent"])
};

export default InfiniteList;

// 300 185 5572
