import React, { useState, useLayoutEffect } from "react";
import useInView from "react-cool-inview";
import axios from "axios";
import { link } from "../../../redux/consts";
import CardMobile from "../../cards/card-mobile";
import dynamic from "next/dynamic";
const PostLoading = dynamic(() => import("../../animations/loadings/card"));
import Footer from "../../footer/footer"
import styles from "../../../styles/list-item.module.css"

function loadItems(page, nPerPage,  array = [], route) {
    return new Promise(async (resolve) => {

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        let res = null;

        if(route)
            res = await axios.get(`${link}/article/blog/${nPerPage}/${page}/${route}`, config);
        else    
            res = await axios.get(`${link}/article/blog/${nPerPage}/${page}`, config);

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

export default function LisItem({ page, route}) {
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(parseInt(page));
    const [nPerPage, setNPerPage] = useState(6);
    const [articles, setArticles] = useState([]); 
    const [hasNextPage, setHasNextPage] = useState(true);
    const [numberTotalOfPage, setNumbreTotalOfPage] =  useState(0);
    const [nextPage, setNextPage] = useState(1);

    const { observe} = useInView({
        threshold: 0.25, // Default is 0
        onEnter:  ({ unobserve }) => {
            // Pause observe when loading data
            unobserve();
            if(hasNextPage)
                return 0
            handleLoadMore(nextPage, articles)
        },
    });

    useLayoutEffect(() => {
        setLoading(true)
        handleLoadMore(0);
    }, [])

    const handleLoadMore = (page, array = []) => {
        loadItems(page, nPerPage, array, route).then(res => {
            const {articles, pageNumber, hasNextPage, numberTotalOfPage, nextPage} = res;
            setArticles(articles);
            setPageNumber(pageNumber);
            setHasNextPage(hasNextPage);
            setNumbreTotalOfPage(numberTotalOfPage);
            setNextPage(nextPage);
            setLoading(false)
        });
    }

    return (
        <div className = {`${styles.container}`} >
            <div className = {styles.posts}>
                {
                    articles.length ? (articles.map((item, idx)=>
                        <div ref = {idx === articles.length - 1 ? observe : null} key = {idx.toString()} className = {`${styles.post}`}>
                            <CardMobile
                                title = {item.title}
                                description = {item.description}
                                img = {`https://solipresse.herokuapp.com/${item.image.path}`}
                                category = {item.category[0]}
                                id = {item._id}
                                link = {`/${item._id}`}
                                date = {item.date}
                            />
                        </div>       
                    )): null
                }
                {
                    !articles.length && loading ? <PostLoadingComponent/> : null
                }
            </div>
            {
                articles.length  ? <Footer/> : null
            }
        </div>
    );
}

export const PostLoadingComponent = ()  => (
    <>
        <div className = {styles.post}>
            <PostLoading/>
        </div>
        <div className = {styles.post}>
            <PostLoading/>
        </div>
        <div className = {styles.post}>
            <PostLoading/>
        </div>
    </>
)




