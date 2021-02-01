import React from "react"
import css from "./style.module.css"

function Button (props){
    return <div className={css.Button}>
        {props.text}
        </div>
    }
export default Button;