import React, { useState,useContext } from 'react'
import Questions from '../helpers/Questions'
import { GameStateContext } from '../context/context';

function Quiz() {

    const [currentQuestion,SetCurrentQuestion] = useState(0)
    const [optionChoosen,SetOptionChoosen] = useState("")
    const {gameState, setGameState,userName,setUserName,score,setScore} = useContext(GameStateContext)
    
    
    function nextQuestion(){
        if(optionChoosen === Questions[currentQuestion].answer ){
            setScore(score+1)
        }

        SetCurrentQuestion(currentQuestion+1)
        
    }

    function finishQuiz(){
        setGameState("score")
    }

    function chooseOption(opt) {
        SetOptionChoosen(opt)
    }

    return ( 
        <div className='quiz'>
            <h4>{Questions[currentQuestion].question}</h4>
            <div className='options'>
                <button onClick={() => {chooseOption("optionA")}}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => {chooseOption("optionB")}}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => {chooseOption("optionC")}}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => {chooseOption("optionD")}}>{Questions[currentQuestion].optionD}</button>
                {score}
                {currentQuestion == Questions.length -1 ? <button onClick={finishQuiz} id="finishQuiz">finish Quiz</button> : <button id='nextQuestion' onClick={nextQuestion}>Next Question</button>
                
                }
                
            </div>
            
        </div>
     )
}

export default Quiz