import Link from "next/link";
import styles from "../../styles/sidebar.module.css"

const Sidebar = ({toggle, handleSelect, select}) => {
    return(
        <div className = {`${styles.container} ${toggle ? styles.hidden : null}`}> 
            <div className = {styles.options}>
                <Link href = "/admin/overview" >
                    <a onClick = {()=> handleSelect("overview") } className = {select === "overview" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fas fa-home"></i></div>
                        <div className = {styles.label}>Overview</div>
                    </a>
                </Link>
                <Link href = "/admin/analytic" >
                    <a onClick = {()=> handleSelect("analytic") } className = {select === "analytic" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="far fa-chart-bar"></i></div>
                        <div className = {styles.label}>Analytics</div>
                    </a>
                </Link>
                <Link href = "/admin/author" >
                    <a onClick = {()=> handleSelect("author") } className = {select === "author" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className ="fas fa-user"></i></div>
                        <div className = {styles.label}>Authors</div>
                    </a>
                </Link>
                <Link href = "/admin/editor">
                    <a  onClick = {()=> handleSelect("editor") } className = {select === "editor" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="fas fa-user-tie"></i></div>
                        <div className = {styles.label}>Editors</div>
                    </a>
                </Link>
                <Link href = "/admin/blog/page/0" >
                    <a onClick = {()=> handleSelect("blog") } className = {select === "blog" ? styles.seleted_item : styles.item}>
                        <div className = {styles.icon}><i className="far fa-newspaper"></i></div>
                        <div className = {styles.label}>Blog</div>
                    </a>
                </Link>
                <Link href = "/admin/drafts/page/0" >
                    <a onClick = {()=> handleSelect("draft") } className = {select === "draft" ? styles.seleted_item : styles.item}>
                        <div className = {`${styles.icon} ${styles.drafts}`}><i className="fas fa-newspaper"></i></div>
                        <div className = {styles.label}>Drafts</div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;