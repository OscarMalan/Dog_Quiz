import { useState } from "react";
import React, { useEffect } from 'react';
import './Begin_Test.css';
import { Console } from "console";

export let UserName: any;

function Begin_Test() {
  useEffect(() => {
    document.title = 'Signing into Test';
  }, []);
  const [Data,Set_Data]=useState(null)
  function Get_Data(val: any){
    Set_Data(val.target.value)
    
  }
  function Store_Name() {
    if (Data === null){}
    else {UserName = Data;}
    console.log(UserName);
  }
  return (
    <div id="Begin_Test">
      <h1>Time to begin the Test</h1>
      <p>Please enter a username</p>
      <input type="text" onChange={Get_Data} />
      <button><img src={require('./thumbs-up.png')} alt='darkmode_lightmode' onClick={Store_Name} /></button>
    </div>
  );
}

export default Begin_Test;