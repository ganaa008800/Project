import React from "react"
import css from "./style.module.css"
import Logo from "../Header/Logo"
import Social from "../Header/Social"
import Login from "../Header/Login"

function Menu(props) {
  return ( <div className={css.Menu} >
 <Logo/>
  <Social/> 
 <Login/>
 </div>
)       
}
export default Menu;
 


