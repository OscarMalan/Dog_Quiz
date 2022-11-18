import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Begin_Test.css';


function Begin_Test() {
  useEffect(() => {
    document.title = 'Signing into Test';
    
      fetch('https://b4rktd62ol.execute-api.eu-west-2.amazonaws.com/items')
      .then((Response) => Response.json())
      .then((Data) => {
        const Id = Data.Count + 1;
        sessionStorage.setItem('id', Id.toString());
      });
    }, []);
  
    let navigate = useNavigate();

    const [Username,Set_Username]=useState<string>(sessionStorage.getItem('Username') ?? '')
  
  function Store_Name() {
    if (Username === null || Username === ""){}
    else {
      sessionStorage.setItem('Username', Username);
      navigate('/test')
    }
  }

  return (
    <div id="Begin_Test">
      <h1>Time to begin the Test</h1>
      <p>Please enter a Username for the test. This will be used for you to help reference you on the leaderboard.</p>
      <input type="text" onChange={(Event) => Set_Username(Event.target.value)} placeholder="Your name" />
      <button onClick={Store_Name}>button</button>
      <img src={require("./Golden.png")} alt="good doggo" />
    </div>
  );
}

export default Begin_Test;