import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { fetchUsers } from "../../../redux/actions/user";
import User from "../../components/user";

const Author = (props) =>{
    return(
        <>
            <User
                title = "Author"
                fetchUsers = {props.fetchUsers}
                link = "authors"
                auth = {props.auth}
                user = {props.user}
            />
        </>
    )
}

Author.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});


export default connect(mapStateToProps, {fetchUsers})(Author);