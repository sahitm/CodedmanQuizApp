import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from './components/Score'
import { GameStateContext } from './context/context' 

function App() {
  const [gameState, setGameState] = useState("menu")
  const[userName,setUserName] = useState("")
  const[score,setScore] = useState(0)

  return (
    <div className="App">
        <h1>Quiz App</h1>
        
        <GameStateContext.Provider value={{gameState,setGameState,userName,setUserName,score,setScore}}>
          { (gameState === "menu") && <Menu />}
          { (gameState === "playing") && <Quiz />}
          { (gameState === "score") && <Score />}
        </GameStateContext.Provider>
    </div>
  )
}

export default App
