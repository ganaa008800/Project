import React from "react"
import css from "./style.module.css"

function Social(props) {
    return (
        <div className={css.Social} >
 
 
            <a className={css.facebook} href="https://www.facebook.com/" target="_blank"
              ><i class="fab fa-facebook fa-1x"></i
            ></a>
            <a className={css.twitter} href="https://www.twitter.com/" target="_blank"
              ><i class="fab fa-twitter fa-1x"></i
            ></a>
            <a className={css.instagram} href="https://www.instagram.com/" target="_blank"
              ><i class="fab fa-instagram fa-1x"></i
            ></a>
            <a className={css.youtube} href="https://www.youtube.com/" target="_blank"
              ><i class="fab fa-youtube fa-1x"></i
            ></a>
 
         </div>
    )
        

   
    
}

export default Social;