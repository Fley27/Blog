import React, {useState} from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Head from "next/head";
import PaginationList from "../blog/pagination/page";
import styles from "../../styles/blog.module.css";

const Drafts = (props) => {

    const [postSearch, setPostSearch] = useState({
        category: [
            {value: "tecnologie", label: "Tecnologie", isSelected: true},
            {value: "sexo", label: "Sexo",  isSelected: true},
            {value: "beauté", label: "Beauté", isSelected: true},
            {value: "société", label: "Société", isSelected: true},
            {value: "mode", label: "Mode", isSelected: true},
            {value: "lifestyle", label: "Lifestyle", isSelected: true},
            {value: "jobs-et-études", label: "Jobs Et Études", isSelected: true},
            {value: "bon-plans", label: "Bon Plans", isSelected: true},
        ],
        tag: [
            {label: "Féminisme", value: "féminisme", isSelected: true},
            {label: "Socialisme", value: "socialisme", isSelected: true},
            {label: "Sexe", value: "sexe", isSelected: true},
            {label: "Transgenre", value: "transgenre", isSelected: true},
            {label: "Homosexulité", value: "homosexulité", isSelected: true},
            {label: "Bisexualité", value: "bisexualité", isSelected: true},
            {label: "LGBT", value: "LGBT", isSelected: true},
            {label: "Politique", value: "politique", isSelected: true},
            {label: "LGBTQ", value: "LGBTQ", isSelected: true},
            {label: "Economie", value: "economie", isSelected: true},
        ],
        orderBy: [
            {value: "ascendant", label: "Ascendant", isSelected: true},
            {value: "descendant", label: "Descendant", isSelected: false},
        ],
        sortBy: [
            {value: "title", label: "Title", isSelected: true},
            {value: "description", label: "Description", isSelected: false},
            {value: "content", label: "Content", isSelected: false},
        ]
    })

    const [search, setSearch] = useState("");

    return(
        <div className = {`${styles.container} `}>
            <Head>
                <title>Drafts</title>
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
                props.id >= 0 ? (
                    <PaginationList
                        token = {props.auth.token}
                        page = {props.id}
                        state = {postSearch}
                        search = {search}
                        setState = {setPostSearch}
                        setSearch = {setSearch}
                        isAvailable = {false}
                    />
                ):null
            }
        </div>
    )
}


Drafts.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
});


export default connect(mapStateToProps)(Drafts);