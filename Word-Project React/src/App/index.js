import React from "react";
import "./style.module.css";
import Login from "../Login";
import HeaderControl from "../Component/HeaderControl";
import Control from "../Component/Control";
import BoxControls from "../Component/BoxControls";

const App = () => {
  return (
    <div className="App">
      <Login />
      <HeaderControl/>
        <Control/>
       <BoxControls/>
        
    </div>
  );
};

export default App;
/* <img src={logo} className="App-logo" alt="logo" /> */
