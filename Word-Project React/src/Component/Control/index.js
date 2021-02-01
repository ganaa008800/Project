import React, { useState } from "react"
import css from "./style.module.css"


const Control = () => {
   const [commentHistory, setCommentHistory] = useState([]);
  const [comment, setComment] = useState([]);

  const inputHandler = (e) => {
    setComment(e.target.value);
  };

  const clickHandler = () => {
    setCommentHistory([...commentHistory, comment]);
  }; 
      return (
         <div className={css.Control}>               
       <input  type="text"   placeholder="value "  />
       <input onChange={inputHandler} type="text" placeholder="Add description " />
       <button onClick={clickHandler}> хадгалах </button>
       <div> {commentHistory.map((el) => (<div>{el}</div>))}</div>     
         </div>
      )
   }
   export default Control


 