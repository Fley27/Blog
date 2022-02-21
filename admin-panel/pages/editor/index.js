import User from "../../components/user";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { fetchUsers } from "../../../redux/actions/user";

function Editor (props){
    return(
        <User
            title = "Editor"
            fetchUsers = {props.fetchUsers}
            link = "editors"
            auth = {props.auth}
            user = {props.user}
        />
    )
}

Editor.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
});


export default connect(mapStateToProps, {fetchUsers})(Editor);