import Link from "next/link";
import styles from "../../styles/sidebar.module.css"

const Sidebar = ({toggle, handleSelect, select}) => {
    return(
        <div className = {toggle ? styles.container_ : styles.container}> 
            <div className = {styles.options}>
                <Link href = "/admin/dashboard" >
                    <a onClick = {()=> handleSelect("dashboard") } className = {select === "dashboard" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}>
                            <div className = {styles.left}>
                                <div className = {styles.square}></div>
                                <div className = {styles.square}></div>
                            </div>
                            <div className = {styles.right}>
                                <div className = {styles.square}></div>
                                <div className = {styles.square}></div>
                            </div>
                        </div>
                        <div className = {styles.label}>Dashboard</div>
                    </a>
                </Link>
                <Link href = "/admin/mailbox">
                    <a  onClick = {()=> handleSelect("mailbox") } className = {select === "mailbox" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fas fa-envelope"></i></div>
                        <div className = {styles.label}>Mailbox</div>
                    </a>
                </Link>
                <Link href = "/admin/author" >
                    <a onClick = {()=> handleSelect("author") } className = {select === "author" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className ="fas fa-user"></i></div>
                        <div className = {styles.label}>Author</div>
                    </a>
                </Link>
                <Link href = "/admin/editor">
                    <a  onClick = {()=> handleSelect("editor") } className = {select === "editor" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fas fa-user-tie"></i></div>
                        <div className = {styles.label}>Editor</div>
                    </a>
                </Link>
                <Link href = "/admin/category" >
                    <a onClick = {()=> handleSelect("category") } className = {select === "category" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fab fa-cuttlefish"></i></div>
                        <div className = {styles.label}>Category</div>
                    </a>
                </Link>
                <Link href = "/admin/blog" >
                    <a onClick = {()=> handleSelect("blog") } className = {select === "blog" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fas fa-blog"></i></div>
                        <div className = {styles.label}>Blog</div>
                    </a>
                </Link>
                <Link href = "/admin/event" >
                    <a onClick = {()=> handleSelect("events") } className = {select === "events" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fas fa-calendar-alt"></i></div>
                        <div className = {styles.label}>Events</div>
                    </a>
                </Link>
            </div>
            <div className = {styles.btn}>
                <div className = {styles.icon}><i className="fas fa-sign-out-alt"></i></div>
                <div className = {styles.label}>Logout</div>
            </div>
        </div>
    )
}

export default Sidebar;