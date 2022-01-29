import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Head from 'next/head'
import Login from '../../components/auth/login'
import SignUp from '../../components/auth/register'
import Loading from '../../animation/loading';
import styles from '../../styles/auth.module.css'

const Auth = (props) => {
    const [toggle, setToggle] = useState(false);

    const [login, setLogin] = useState({
        email : "",
        password: ""
    })

    const [register, setRegister] = useState({
        email : "",
        firstName: "", 
        lastName: "",
        password: ""
    })

    useEffect(() => {
        setToggle(false)
    }, [])

    useEffect(()=>{
        const {token, isAuthenticated} = props.auth;
        if(token && isAuthenticated)
            window.location.href = `/admin/dashboard${props.auth.redirectTo}`
        else if(token && isAuthenticated && !toggle)
            window.location.href = "/feeds"
    },[props.auth])

    const handleToggle = () =>{
        setToggle(!toggle)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Solipresse</title>
                <meta name="description" content="Solipresse authentification" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>

            <main className={styles.main}>
                {
                    toggle ? (
                        <SignUp
                            handleToggle = {handleToggle}
                            state = {register}
                            setState = {setRegister}
                            auth = {props.auth}
                        />
                    ): (
                        <Login
                            handleToggle = {handleToggle}
                            state = {login}
                            setState = {setLogin}
                            auth = {props.auth}
                        />
                    )
                }
            </main>
        </div>
    )
}

Auth.propTypes = {
    auth: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});


export default connect(mapStateToProps)(Auth);