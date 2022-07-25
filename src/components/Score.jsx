import React, { useContext } from 'react'
import { GameStateContext } from '../context/context'; 

function Score() {
     
    const {gameState, setGameState,userName,setUserName,score,setScore} = useContext(GameStateContext)

    function Restart(){
        setGameState("menu")
        setUserName("")
        setScore(0)
    }

    return ( 
        <div className='score'>
            <h1>The Quiz is Completed</h1>
            <h4>Congrats {userName} your score is : {score}</h4>
            <button onClick={Restart}>Restart Quiz</button>
        </div>
     );
}

export default Score;