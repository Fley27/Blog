import Image from "next/image";
import img from "../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"
import styles from "../../styles/table-user.module.css"



export const TableUsers = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.table}>
                <div className = {styles.header}>
                    <div className = {styles.thead}>
                        <div className = {`${styles.th} ${styles.wider}`}>Name</div>
                        <div className = {`${styles.th} ${styles.wider}`}>LOCATION</div>
                        <div className = {`${styles.th}`}>Birthday</div>
                        <div className = {`${styles.th}`}>Action</div>
                    </div>
                </div>
                <div className = {styles.body}>
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Fenley MENELAS</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Cleveland, Ohio, USA</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/06/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    {/* Next Row */}
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Brandon Stephen Curry</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Atlanta, Georgia, USA</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/09/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    {/* Next Row */}
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Jie Yan Song</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>North Canton, Ohio, USA</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/09/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    {/* Next Row */}
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Jack Bowrels</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Madrid, Madrid, Spain</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/09/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    {/* Next Row */}
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Jesus Foster</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>San Diego, California, USA</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/09/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    {/* Next Row */}
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Lina Adams Foster</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Atlanta, Georgia, USA</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/09/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                    {/* Next Row */}
                    <div className = {styles.tbody}>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>
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
                            <span>Jude Jacob Adams Foster</span>
                        </div>
                        <div className = {`${styles.th} ${styles.wider} ${styles.tb}`}>Los Angeles, California, USA</div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            27/09/1997
                        </div>
                        <div className = {`${styles.th} ${styles.tb} ${styles.action}`}>
                            <span><i className = "far fa-edit"></i></span>
                            <span><i className = "fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}