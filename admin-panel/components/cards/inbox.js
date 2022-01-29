
import Image from "next/image";
import img from "../../../images/juliuscaesar-long-hair-black-men-kinky-curls-line-up-low-fade.jpeg"
import img2 from "../../../images/p2.jpeg"
import img3 from "../../../images/p3.jpeg"
import img4 from "../../../images/p4.jpeg"
import img5 from "../../../images/p5.jpeg"
import styles from "../../styles/inbox.module.css"


const InboxCard  = () => (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.title}>Inbox</div>
        </div>
        <div className = {styles.chat}>
            <div className = {styles.item}>
                <div className = {styles.profile}>
                    <div className = {styles.image}>
                        <Image
                            src= {img}
                            alt="Picture of the author"
                            layout = "fill"
                            placeholder = "blur"
                        />
                    </div>
                    <div className = {`${styles.profileStatus}  ${styles.hidden}`}></div>
                </div>
                <div className = {styles.message}>
                    <div className = {styles.name}>Patrick Joseph</div>
                    <div className = {styles.text}>Hello, we spoke earlier on the phone.</div>
                </div>
            </div>
            {/**  */}
            <div className = {styles.item}>
                <div className = {styles.profile}>
                    <div className = {styles.image}>
                        <Image
                            src= {img2}
                            alt="Picture of the author"
                            layout = "fill"
                            placeholder = "blur"
                        />
                    </div>
                    <div className = {`${styles.profileStatus} ${styles.hidden}`}></div>
                </div>
                <div className = {styles.message}>
                    <div className = {styles.name}>Antoine Letelier</div>
                    <div className = {styles.text}>Is the job still available?</div>
                </div>
            </div>
            {/**  */}
            <div className = {styles.item}>
                <div className = {styles.profile}>
                    <div className = {styles.image}>
                        <Image
                            src= {img3}
                            alt="Picture of the author"
                            layout = "fill"
                            placeholder = "blur"
                        />
                    </div>
                    <div className = {`${styles.profileStatus} ${styles.hidden} `}></div>
                </div>
                <div className = {styles.message}>
                    <div className = {styles.name}>Fenley Ménélas</div>
                    <div className = {styles.text}>What is a screening task? I’d like to</div>
                </div>
            </div>
            {/**  */}
            <div className = {styles.item}>
                <div className = {styles.profile}>
                    <div className = {styles.image}>
                        <Image
                            src= {img4}
                            alt="Picture of the author"
                            layout = "fill"
                            placeholder = "blur"
                        />
                    </div>
                    <div className = {`${styles.profileStatus} ${styles.hidden} `}></div>
                </div>
                <div className = {styles.message}>
                    <div className = {styles.name}>Bernade Delicat Joseph</div>
                    <div className = {styles.text}>Still waiting for feedback</div>
                </div>
            </div>
            {/**  */}
            <div className = {styles.item}>
                <div className = {styles.profile}>
                    <div className = {styles.image}>
                        <Image
                            src= {img5}
                            alt="Picture of the author"
                            layout = "fill"
                            placeholder = "blur"
                        />
                    </div>
                    <div className = {`${styles.profileStatus} ${styles.hidden} `}></div>
                </div>
                <div className = {styles.message}>
                    <div className = {styles.name}>Stephanie Douyon</div>
                    <div className = {styles.text}>Need more information about current campaigns</div>
                </div>
            </div>
        </div>
        <div className = {styles.footer}>
                <div className = {styles.label}>
                    Go to chat
                </div>
        </div>
    </div>
)

export default InboxCard    ;