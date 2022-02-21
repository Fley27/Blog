import Link from "next/link";
import Image from "next/image";
import img from "../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"
import styles from "../../styles/table-user.module.css"



export const TableUsers = ({users = [], link}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.table}>
                <div className = {styles.header}>
                    <div className = {styles.thead}>
                        <div className = {`${styles.th} ${styles.wider}`}>Name</div>
                        <div className = {`${styles.th} ${styles.wider}`}>LOCATION</div>
                        <div className = {`${styles.th}`}>Phone Number</div>
                        <div className = {`${styles.th}`}>Action</div>
                    </div>
                </div>
                <div className = {styles.body}>
                    {
                        users.map((item, idx) => (
                            <div key = {idx} className = {styles.tbody}>
                                <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
                                    {
                                        item.avatar ? (
                                            <div className = {`${styles.profile} ${styles.avatar}`}>
                                                <div className = {styles.image}>
                                                    <Image
                                                        src= {img}
                                                        alt="Picture of the author"
                                                        layout = "fill"
                                                        placeholder = "blur"
                                                    />
                                                </div>
                                            </div>
                                        ):null
                                    }
                                    <span>{`${item.firstName.trim()} ${item.lastName.trim()}`}</span>
                                </div>
                                <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>{item.location ? item.location : "()"}</div>
                                <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                                    {item.phone ? item.phone : "()"}
                                </div>
                                <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                                    <Link href = {`/admin/${link.substring(0, link.length - 1)}/edit/${item._id}`}>
                                        <a className = {styles.span}>
                                            <span><i className = "far fa-edit"></i></span>
                                        </a>
                                    </Link>
                                    <Link href = {`/admin/${link.substring(0, link.length - 1)}/${item._id}`}>
                                        <a  className = {styles.span}>
                                            <span><i className = "fas fa-arrow-right"></i></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}