import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { avoidAlert } from "../../redux/actions/alert";

const Alert = ({ alerts, avoidAlert }) => {

    const avoid_Alert = () => {
        avoidAlert()
    }

    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div key={alert.id + 1} className = {`alert-pop-pup ${alert.alertType}`} >
                <div className = "msg-alert-container">
                    <div className = {`title-alert-${alert.alertType}`}>{alert.title}</div>
                    <p>{alert.msg}</p> 
                </div>
                <div className = "icon">
                    <i onClick = {()=>avoid_Alert()} className = "fas fa-times"></i>
                </div>
            </div>
        ))
    );
};

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
    avoidAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps, {avoidAlert})(Alert);