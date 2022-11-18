import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import data from './Question_Data.json';
import './Test.css';

// Variables that are used everywhere
let i = 0;
let wrong = 0;
let Bark_Audio = new Audio('Bark.mp3');
let Fart_Audio = new Audio('Fart.wav');
let Fart_Empty_Audio = new Audio('Fart_Empty.wav');
export let Score: number = 0;

const Test = () => {
        useEffect(() => {
        document.title = 'Test';
    }, []);

    // navigate is for sending the user to the results page after finishing the test
    let navigate = useNavigate();
    // useState is for updating the live state of the site, this is good for having the questions appear
    let [QuestionNumber, setQuestionNumber] = useState(0);

    // Tests to see if answer is right or wrong, if wrong the poodle gets wider
    function Submit_Answer(Choice: any){
        const Doomed_Dog = document.getElementById("doomed_dog");
        if (Choice === data[QuestionNumber].Answer) {
            Score++;
        }
        else{
            wrong++;
            // Controls poodle size, has the if(null) because typescript gets worried
            if (Doomed_Dog !== null)
                {Doomed_Dog.style.width = 480 + (wrong * 160) + "px";}}
            // sends user to results page when done all questions
            if (QuestionNumber === 10){
                sessionStorage.setItem('Score', Score.toString());
                navigate('/results')

        }
        // updates the question
        i++;
        setQuestionNumber(i);
    }

    // Controls the audio and deflations
    function Bark(){
        const Doomed_Dog = document.getElementById("doomed_dog");
        if (wrong >=8) {
            Fart_Empty_Audio.play();
            if (Doomed_Dog !== null)
            {Doomed_Dog.style.width = "480px"; wrong = 0;}
        }
        else if (wrong >= 5) 
        {Fart_Audio.play()}
        else
        {Bark_Audio.play()}
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