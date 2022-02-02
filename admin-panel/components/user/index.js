import React, {useState} from 'react';
import Head from 'next/head'
import Header from '../general/header';
import { Search } from './search';
import { TableUsers } from '../table/user';
import styles from '../../styles/analytic.module.css';

export default function User({title}) {
    const [selected, setSelected] = useState("All");
    const handleSelect = (item) => setSelected(item)
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
            />
            <TableUsers/>
        </div>
    )
}