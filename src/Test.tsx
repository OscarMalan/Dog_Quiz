import { useState } from "react";
import './Test.css';

function Test() {
  const [Data,Set_Data]=useState(null)
  function Get_Data(val: any){
    Set_Data(val.target.value)
  }
  function Store_Name() {
    if (Data === null){}
    else {console.log(Data);}
  }
  return (
    <div id="Test">
      <h1>Time to begin the Test</h1>
      <p>Please enter a username</p>
      <input type="text" onChange={Get_Data} />
      <button><img src={require('./thumbs-up.png')} alt='darkmode_lightmode' onClick={Store_Name} /></button>
    </div>
  );
}

export default Test;
