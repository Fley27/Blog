import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import Image from "next/image";
import img from "../../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"
import styles from "../../../styles/details-user.module.css"
import { DetailsTab } from './tab/details';
export default function UserDetails (props) {
    const [selected, setSelected] = useState("Details");
    const handleSelect = (item) => setSelected(item)
    return(
        <div className = {styles.container}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Get all lost data" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <Link href = "/admin/author">
                <a className = {styles.btn}>
                    <span><i className = "fas fa-arrow-left"></i></span>
                    {props.title}
                </a>
            </Link>
            <div className = {styles.header}>
                <div className = {styles.avatar}>
                    <div className = {`${styles.profile}`}>
                        <div className = {styles.image}>
                            <Image
                                src= {img}
                                alt="Picture of the author"
                                layout = "fill"
                                placeholder = "blur"
                            />
                        </div>
                    </div>
                    <div className = {styles.name}>
                        <div className = {styles.dispalyName}>Fenley Menelas</div>
                        <div className = {styles.username}>@fenleyMenelas</div>
                    </div>
                </div>
                <div className = {styles.buttons}>
                    <div className = {`${styles.button} ${styles.mauvre}`}>
                        Edit <span><i className="far fa-edit"></i></span>
                    </div>
                    <div className = {`${styles.button} ${styles.green}`}>
                        Approve <span><i className="far fa-check-circle"></i></span>
                    </div>
                    <div className = {`${styles.button} ${styles.red}`}>
                        Reject <span><i className="fas fa-ban"></i></span>
                    </div>
                </div>
                </div>
                <div className = {styles.tab}>
                    <div onClick = {()=> handleSelect("Details")} className = {`${styles.item} ${selected === "Details" ? styles.selected : null}`}>
                        Details
                    </div>
                    <div onClick = {()=> handleSelect("Posts")} className = {`${styles.item} ${selected === "Posts" ? styles.selected : null}`}>
                        Posts
                    </div>
                    <div onClick = {()=> handleSelect("Drafts")} className = {`${styles.item} ${selected === "Drafts" ? styles.selected : null}`}>
                        Drafts
                    </div>
                    <div onClick = {()=> handleSelect("removed")} className = {`${styles.item} ${selected === "removed" ? styles.selected : null}`}>
                        Removed Post
                    </div>
                </div>
                <DetailsTab/>
        </div>
    )
}