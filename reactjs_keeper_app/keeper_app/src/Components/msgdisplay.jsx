import React from "react";
import { del } from '../App';
let prop;
function del1(index){
    del(index);
    console.log(index);
    prop.onClick3();
}
function disp(element,index){
    return(
        <div>
        <li className="msgdisp">{element}</li>
        <button className="del" onClick={()=>{del1(element)}} >Delete</button>
        </div>
    );
}
function Msgdisplay(props){
    prop=props;
    return(
        props.msg2.map(disp)
   
    );
}

export default Msgdisplay;
