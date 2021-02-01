import React from "react"
import css from "./style.module.css"
import LeftBox1 from "../Box/LeftBox1"
import LeftBox2 from "../Box/LeftBox2"
import LeftBox3 from "../Box/LeftBox3"
import RightBox1 from "../Box/RightBox1"
import RightBox2 from "../Box/RightBox2"
import RightBox3 from "../Box/RightBox3"
import MainBox from "../Box/MainBox"



function BoxControls (){
    return <div className={css.BoxControls}
    >
    
        <LeftBox1/>
        <LeftBox2/>
        <LeftBox3/>
        <MainBox/>
        <RightBox1/>
        <RightBox2/>
        <RightBox3/>
       
     
    </div>


}
export default BoxControls;