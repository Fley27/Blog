import React, {useState} from "react"
import styles from "../styles/square.module.css"

const Square = ({left, right}) => {
    const [array, setArray] = useState(Array.from(Array(1000).keys()));
    return(
        <div style = {{backgroundColor: right}} className = {styles.container}>
            {
                array.map((item, idx)=>
                    <div style = {{height: `.067px`}} key = {idx} className = {styles.diagonal}>
                        <div style = {{width: `${0.079 * (item+1)}%`, backgroundColor: left}} className = {styles.left}></div>
                        <div style = {{width: `${0.079 * (1000 - item)}%`, backgroundColor: right}} className = {styles.right}></div>
                    </div>
                )
            }
        </div>
    )
}

export default Square;