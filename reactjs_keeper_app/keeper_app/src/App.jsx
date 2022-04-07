import React,{useState} from "react";
import Header from "./Components/Header";
import Msg from "./Components/msg";
import Msgdisp from "./Components/msgdisplay";
// import Footer from "./Components/Footer"
let msg1;
let msg3=['1','2','3','4'];
function del(index){
   msg1=index;
   console.log(msg1);
}

function App(){
    const [msg3, saveMsg1] = useState([]);
    const handleRemoveItem = () => {
        
         saveMsg1(msg3.filter(item => item !== msg1));
       };
    return(
        <div>
        <Header/>
        <Msg  onClick1={ ()=>{saveMsg1(msg3=> [...msg3,(document.getElementById("hh").value)])}}/>
        <Msgdisp msg2={msg3} onClick3={handleRemoveItem}/>
        </div>
    );
}
export default App;
export {del};