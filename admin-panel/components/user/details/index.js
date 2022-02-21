import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Head from 'next/head'
import Link from 'next/link';
import Image from "next/image";
import img from "../../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"
import styles from "../../../styles/details-user.module.css"
import { DetailsTab } from './tab/details';
import Posts from './tab/post';
import Drafts from './tab/drafts';
import { detailUser, updateUser } from '../../../../redux/actions/user';


function UserDetails (props) {
    const [selected, setSelected] = useState("Details");
    const handleSelect = (item) => {
        setSelected(item)
    };
    useEffect(()=>{
        props.detailUser(props.auth.token, props.id);  
    }, [])

    const handleUpdateUser = () => {
        const body = {
            status: "Approved"
        }
        props.updateUser(props.auth.token, JSON.stringify(body), props.id)
    }
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
            <Link href = {`/admin/${props.link}`}>
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
                        <div className = {styles.dispalyName}>{`${props.user.user ? `${props.user.user.firstName} ${props.user.user.lastName}` : null }`}</div>
                        <div className = {styles.username}>@fenleyMenelas</div>
                    </div>
                </div>
                <div className = {styles.buttons}>
                    <Link href = {`/admin/${props.link}/edit/${props.id}`}>
                        <a className = {`${styles.button} ${styles.mauvre}`}>
                            Edit <span><i className="far fa-edit"></i></span>
                        </a>
                    </Link>
                    {
                        props.user.user ? !props.user.user.status || props.user.user.status === "Pending" ? (
                            <div onClick = {()=>handleUpdateUser()} className = {`${styles.button} ${styles.green}`}>
                                Approve <span><i className="far fa-check-circle"></i></span>
                            </div>
                        ) : null : null
                    }
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
                </div>
                {
                    props.user.user ? (
                        <Tab
                            selected = {selected}
                            user = {props.user.user}
                            id = {props.id}
                            link  = {props.link}
                        />
                    ):null
                }
        </div>
    )
}

export const Tab = ({selected, user, id, link}) => {
    if(selected === "Details") return(
        <DetailsTab
            user = {user}
        />
    )
    if(selected === "Posts") return(
        <Posts
            id = {id}
            route = {link}
        />
    )
    if(selected === "Drafts") return(
        <Drafts
            id = {id}
            route = {link}
        />
    )
}

UserDetails.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    detailUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});


export default connect(mapStateToProps, {detailUser, updateUser})(UserDetails);