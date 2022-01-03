import Head from 'next/head'
import Form from './forms/login'
import Loading from '../../animation/loading'
import Card from '../cards/index'
import styles from '../../styles/login.module.css'

export default function Login({auth, ...props}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Solipresse, Login</title>
                <meta name="description" content="Get connected To our website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <div className  = {styles.formContainer}>
                {
                    auth.loading ? (
                        <Loading/>
                    ): (
                        <>
                            <div className = {styles.title}>Sign in into Your Account</div>
                            <Form
                                state = {props.state}
                                setState = {props.setState}
                            />
                        </>
                    )
                }
            </div>
            <div className = {styles.cardContainer}>
                <Card
                    title = "Hello !!!"
                    subtitle = "Since today, let start to create the greatest magazine that ever exist before."
                    button = "SIGN UP"
                    handleToggle = {props.handleToggle}
                />
            </div>
        </div>
    )
}