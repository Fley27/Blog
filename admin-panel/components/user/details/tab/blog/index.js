import React, {useState} from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import WindowPagination from "../../../../blog/pagination/window";
import styles from "../../../../../styles/blog.module.css";

const Blog = (props) => {

    const [state, setState] = useState({
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

    const [search, setSearch] = useState("")

    return(
        <div className = {`${styles.container} ${styles.window}`}>
            <WindowPagination
                token = {props.auth.token}
                state = {state}
                search = {search}
                setState = {setState}
                setSearch = {setSearch}
                isAvailaible = {props.isAvailable}
                id = {props.id}
                route = {props.route}
            />
        </div>
    )
}


Blog.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    post: state.post
});


export default connect(mapStateToProps)(Blog);