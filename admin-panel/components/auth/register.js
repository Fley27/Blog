
import Head from 'next/head'
import Form from './forms/register'
import Loading from '../../animation/loading'
import Card from '../cards/index'
import styles from '../../styles/register.module.css'

export default function SignUp({auth, ...props}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Register</title>
                <meta name="description" content="Join our community." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <div className = {styles.cardContainer}>
                <Card
                    title = "Welcome Back !!!"
                    subtitle = "Stay connected with us, and build the largest platform dedicated to educating people every day."
                    button = "SIGN IN"
                    link = "login"
                />
            </div>
            <div className  = {styles.formContainer}>
                {
                    auth.loading ? (
                        <Loading/>
                    ): (
                        <>
                            <div className = {styles.title}>Create Your Account</div>
                            <Form
                                state = {props.state}
                                setState = {props.setState}
                            />
                        </>
                    )
                }
            </div> 
        </div>
    )
}