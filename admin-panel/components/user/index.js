import React, {useState, useLayoutEffect, useEffect} from 'react';
import Head from 'next/head'
import Header from '../general/header';
import dynamic from 'next/dynamic';
import { Search } from './search';
import { TableUsers } from '../table/user';
const Empty = dynamic(() => import("../../error/empty"));
import styles from '../../styles/analytic.module.css';

const User = ({title, fetchUsers, auth, user, link}) => {
    const [selected, setSelected] = useState("All");
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    useLayoutEffect(()=>{
        const body = {
            name: name,
            status: selected
        }
        fetchUsers(auth.token, link, JSON.stringify(body))
    }, [])

    useEffect(() => {
        setUsers(user.users);
        
    }, [user])

    const handleSelect = (item) => {
        setSelected(item);
        const body = {
            name: name,
            status: item
        }
        fetchUsers(auth.token, link, JSON.stringify(body))
    }
    const handleChange = (e) => {
        setName(e.target.value);
        const body = {
            name: e.target.value,
            status: selected
        }
        fetchUsers(auth.token, link, JSON.stringify(body))
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Get all lost data" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>
            <Header
                title = {title}
            />
            <Search
                selected = {selected}
                handleSelect = {handleSelect}
                handleChange = {handleChange}
                name = {name}
            />
            {
                users.length ? (
                    <TableUsers
                        users = {users}
                        link = {link}
                    />
                ): null
            }
            {
                !users.length ?( 
                    <Empty 
                        title = {link}
                    /> 
                ): null
            }
        </div>
    )
}

export default User;