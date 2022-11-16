import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from './Question_Data.json';
import './Test.css';

let i = 0;
let wrong = 0;
let Bark_Audio = new Audio('Bark.mp3');
let Fart_Audio = new Audio('Fart.wav');
export let Score: number = 0;

function Bark(){
  if (wrong <= 5){Bark_Audio.play()}
  else {Fart_Audio.play()}
}

const Test = () => {
    useEffect(() => {
      document.title = 'Test';
    }, []);
    let navigate = useNavigate();
    let [QuestionNumber, setQuestionNumber] = useState(0);
    function Submit_Answer(Choice: any){
        if (Choice === data[QuestionNumber].Answer){console.log("Correct"); Score++;}
        else{
          console.log("not so correc");
          wrong++;
          const Doomed_Dog = document.getElementById("doomed_dog");
          if (Doomed_Dog !== null) {Doomed_Dog.style.width = 30 + (wrong * 10) + "%";}}
        if (QuestionNumber === 10){navigate('/results')}
        i++;
        setQuestionNumber(i);
    }
    return (
      <div>
        <h1>{data[QuestionNumber].Question}</h1>
            <div id="Buttons">
              <div id="Dog_Button"><img src={require("./poodle.png")} alt="ugly dog"  id='doomed_dog' onClick={() => Bark()} /></div>
              <button id="button" onClick={() => Submit_Answer(data[QuestionNumber].Options[0])}>{data[QuestionNumber].Options[0]}</button>
              <button id="button" onClick={() => Submit_Answer(data[QuestionNumber].Options[1])}>{data[QuestionNumber].Options[1]}</button>
              <button id="button" onClick={() => Submit_Answer(data[QuestionNumber].Options[2])}>{data[QuestionNumber].Options[2]}</button>
        </div>
      </div>
    );
  }
  
  export default Test;