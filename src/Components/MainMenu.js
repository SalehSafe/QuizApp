import React , { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css'
const MainMenu = () => {
  
  const {setGameState } = useContext(QuizContext);

  const setGameStateHandler = () => {
    setGameState ('quiz')
  }
  return (

    <div className='Menu'>
      
     <button onClick={setGameStateHandler}> Start Quiz</button>
    </div>
  )
}

export default MainMenu
