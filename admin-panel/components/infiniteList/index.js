import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { link } from "../../../redux/consts";
import BlogPost from "../blog/post/post";
import Pagination from "../../../components/post/pagination/pagination";
import styles from "../../styles/infinite-list.module.css"
import PropTypes from "prop-types";


function loadItems(page, nPerPage, token) {
    return new Promise(async (resolve) => {
        const data = {
            pageNumber: page,
            nPerPage: nPerPage
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

function InfiniteList({ page, token}) {
    const [pageNumber, setPageNumber] = useState(parseInt(page));
    const [nPerPage, setNPerPage] = useState(6);
    const [articles, setArticles] = useState([]); 
    const [hasNextPage, setHasNextPage] = useState(true);
    const [numberTotalOfPage, setNumbreTotalOfPage] =  useState(0);
    const [nextPage, setNextPage] = useState(1);

    useLayoutEffect(() => {
        handleLoadMore(parseInt(page));
    }, [page])

    const handleLoadMore = (page) => {
        loadItems(page, nPerPage, token).then(res => {
            const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res;
            setArticles(articles);
            setPageNumber(pageNumber);
            setHasNextPage(hasNextPage);
            setNumbreTotalOfPage(numberTotalOfPage);
            setNextPage(nextPage)
        });
    }

    return (
        <div className = {styles.container} >
            {
                articles.map((item, idx)=>
                    <div key = {idx} className = {styles.post}>
                        <BlogPost
                            title = {item.title}
                            description = {item.description}
                            img = {`http://localhost:4000/${item.image.path}`}
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
