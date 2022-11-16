import { Console } from 'console';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from './Question_Data.json';
import './Test.css';

let i = 0;
export let Score: number = 0;


const Test = () => {
    useEffect(() => {
      document.title = 'Test';
    }, []);
    let navigate = useNavigate();
    let [QuestionNumber, setQuestionNumber] = useState(0);
    function Submit_Answer(Choice: any){
        if (Choice === data[QuestionNumber].Answer){console.log("Correct"); Score++;}
        else{console.log("not so correc");}
        if (QuestionNumber == 4){navigate('/results')}
        i++;
        setQuestionNumber(i);
    }
    return (
      <div>
        <h1>{data[QuestionNumber].Question}</h1>
            <div id="Buttons">
            <button id="button" onClick={() => Submit_Answer(data[QuestionNumber].Options[0])}>{data[QuestionNumber].Options[0]}</button>
            <button id="button" onClick={() => Submit_Answer(data[QuestionNumber].Options[1])}>{data[QuestionNumber].Options[1]}</button>
            <button id="button" onClick={() => Submit_Answer(data[QuestionNumber].Options[2])}>{data[QuestionNumber].Options[2]}</button>
        </div>
      </div>
    );
  }
  
  export default Test;