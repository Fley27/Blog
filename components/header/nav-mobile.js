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
                                <div className = "nav-mobile-header-title">Solipresse</div>
                                <button onClick = {()=> handleShow()}  className = "mobile-header-icon"><i className ="fas fa-times"></i></button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/"} className = {`nav-item-mobile-text ${main_link === "/" ? " nav-item-selected" : ""}`}>Home</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/beaute"} className = {`nav-item-mobile-text ${main_link === "/beaute" ? " nav-item-selected" : ""}`}>Beauté</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/societe"} className = {`nav-item-mobile-text ${main_link === "/société" ? " nav-item-selected" : ""}`}>Société</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/sexo"} className = {`nav-item-mobile-text ${main_link === "/sexo" ? " nav-item-selected" : ""}`}>Sexo</button>
                            </div>
                            <div className = "nav-item-mobile">
                                <button onClick = {()=>window.location.href = "/bon-plans"} className = {`nav-item-mobile-text ${main_link === "/bon-plan" ? " nav-item-selected" : ""}`}>Bon Plans</button>
                            </div>
                        </div>
                    ): (
                        <div className = "menu-mobile-header">
                            <div className = "mobile-header-title">Solipresse</div>
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