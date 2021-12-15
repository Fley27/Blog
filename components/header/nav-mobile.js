import React, {useState} from "react";


const NavMobile = ({main_link, ...props}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    return(
        <div className = {`menu-mobile ${props.dark ? `dark-mode` : ``} ${show ? ` menu-mobile-how` : ``}`}>
                {
                    show ? (
                        <div className = "nav-mobile">
                            <div className = "nav-mobile-header">
                                <div className = "nav-mobile-header-title">SW</div>
                                <button onClick = {()=> handleShow()}  className = "mobile-header-icon"><i className ="fas fa-times"></i></button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/"} className = {`nav-item-mobile-text ${main_link === "/" ? " nav-item-selected" : ""}`}>Home</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/beauté"} className = {`nav-item-mobile-text ${main_link === "/beauté" ? " nav-item-selected" : ""}`}>Beauté</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/mode"} className = {`nav-item-mobile-text ${main_link === "/mode" ? " nav-item-selected" : ""}`}>Mode</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/société"} className = {`nav-item-mobile-text ${main_link === "/société" ? " nav-item-selected" : ""}`}>Société</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/sexo"} className = {`nav-item-mobile-text ${main_link === "/sexo" ? " nav-item-selected" : ""}`}>Sexo</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/job-et-etude"} className = {`nav-item-mobile-text ${main_link === "/job-et-etude" ? " nav-item-selected" : ""}`}>Jobs Et Études</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/technologie"} className = {`nav-item-mobile-text ${main_link === "/technologie" ? " nav-item-selected" : ""}`}>Technologie</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/bon-plan"} className = {`nav-item-mobile-text ${main_link === "/bon-plan" ? " nav-item-selected" : ""}`}>Bon Plans</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button className = "nav-item-mobile-text">
                                    {
                                        props.dark ? (<span onClick = {()=>props.setMode(false)}><i className="fas fa-moon"></i> {" "}Light</span>): 
                                        (<span onClick = {()=>props.setMode(true)}><i className="far fa-moon"></i>{" "}Night</span>)
                                    }
                                </button>
                            </div>
                        </div>
                    ): (
                        <div className = "menu-mobile-header">
                            <div className = "mobile-header-title">SW</div>
                            <button onClick = {()=> handleShow()}  className = "mobile-header-icon">
                                <div className = "hamburger">
                                    <div className = "hamburger-item"></div>
                                    <div className = "hamburger-item"></div>
                                    <div className = "hamburger-item"></div>
                                </div>
                            </button>
                        </div>
                    )
                }
        </div>
    )
}


export default NavMobile;