import Image from "next/image";
import HeaderCard from "../cards/header";
import img from "../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"
import styles from "../../styles/table-user.module.css"



const TableUsers = ({title}) => {
    return (
        <div className = {styles.container}>
            <HeaderCard 
                title = {title}
            />
            <div className = {styles.table}>
                <div className = {styles.header}>
                    <div className = {styles.thead}>
                        <div className = {`${styles.th}`}>Avatar</div>
                        <div className = {`${styles.th} ${styles.wider}`}>FullName</div>
                        <div className = {`${styles.th} ${styles.wider}`}>Created At</div>
                        <div className = {`${styles.th}`}>Role</div>
                    </div>
                </div>
                <div className = {styles.body}>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <Image
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Fenley MENELAS</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Today</div>
                        <div className = {`${styles.th} ${styles.tb}`}>Admin</div>
                    </div>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <Image
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Lorentz Norga Edma MENELAS</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Yesterday</div>
                        <div className = {`${styles.th} ${styles.tb}`}>Editor</div>
                    </div>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <Image
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Patrick Letelier Carl Hendy John Bruce</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Last Week</div>
                        <div className = {`${styles.th} ${styles.tb}`}>Author</div>
                    </div>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.tb}`}>
                            <div className = {styles.profile}>
                                <div className = {styles.image}>
                                    <Image
                                        src= {img}
                                        alt="Picture of the author"
                                        layout = "fill"
                                        placeholder = "blur"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Joseph Pierre Wendy</div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>08/07/2021</div>
                        <div className = {`${styles.th} ${styles.tb}`}>Normal</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableUsers;