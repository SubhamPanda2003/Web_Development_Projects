import React from "react";

var msg1;

function msg(props){
    return(
        <div>
        <div className="container">
        <div className="msg">
        <input className="inp" id="hh" type="text" placeholder="Enter Your Msg"></input>
        <button className="btn" type="submit" onClick={props.onClick1}>Add</button>
        </div>
        
        </div>
        
        </div>
    );
}

export default msg;
