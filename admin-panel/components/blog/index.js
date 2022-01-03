import React, {useState} from "react";
import Head from "next/head";
import BlogPost from "./post/post";
import Modal from "./post/modal";
import Add from "./post/add";
import img from "../../../images/black-woman.jpeg"
import img2 from "../../../images/art.jpeg"
import img3 from "../../../images/car.jpeg"
import styles from "../../styles/blog.module.css";

const Blog = () => {
    const [array, setArray] = useState([
        {
            title : "Why black woman is the most beautiful in the world.",
            description: "Xavi Hernández ha fichado a Dani Alves por el carácter que el brasileño puede aportar al equipo, tanto a los jóvenes como a los veteranos.",
            category: "Mode",
            img: img
        },
        {
            title : "Art, a passion that the entire world share together.",
            description: "Xavi Hernández ha fichado a Dani Alves por el carácter que el brasileño puede aportar al equipo, tanto a los jóvenes como a los veteranos.",
            category: "Société",
            img: img2
        },
        {
            title : "Super Car",
            description: "Xavi Hernández ha fichado a Dani Alves por el carácter que el brasileño puede aportar al equipo, tanto a los jóvenes como a los veteranos.",
            category: "Lifetyle",
            img: img3
        },
        {
            title : "Why black woman is the most beautiful in the world.",
            description: "Xavi Hernández ha fichado a Dani Alves por el carácter que el brasileño puede aportar al equipo, tanto a los jóvenes como a los veteranos.",
            category: "Féminisme",
            img: img
        },
        {
            title : "Art, a passion that the entire world share together.",
            description: "Xavi Hernández ha fichado a Dani Alves por el carácter que el brasileño puede aportar al equipo, tanto a los jóvenes como a los veteranos.",
            category: "Sexualité",
            img: img2
        },
        {
            title : "Super Car",
            description: "Xavi Hernández ha fichado a Dani Alves por el carácter que el brasileño puede aportar al equipo, tanto a los jóvenes como a los veteranos.",
            category: "Technologie",
            img: img3
        },
    ]);

    const [state, setState] = useState({
        title: "",
        description: "",
        image: null,
        content: null,
        category: [],
        tags: []
    })

    const [toggle, setToggle] = useState(false);

    const [pagination, setPagination] =  useState(0);

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
            <div className = {styles.posts}>
                
                {
                    array.map((item, idx)=>
                        <div key = {idx} className = {styles.blog_post}>
                            <BlogPost
                                title = {item.title}
                                description = {item.description}
                                img = {item.img}
                                category = {item.category}
                            />
                        </div>
                    )
                }
            </div>
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


export default Blog;