import React, { useContext, useState } from 'react'
import { GameStateContext } from '../context/context';

function Menu() {

    const {gameState, setGameState,userName,setUserName} = useContext(GameStateContext)

    return ( 
        <div className='Menu'>
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" placeholder='e.x Bhatta Acharya (Bhattu)' name="name" onChange={(event) => setUserName(event.target.value) }/>
            <button onClick={() => {setGameState("playing")}}>Start Quiz</button>
        </div>
     );
}

export default Menu;