import React , { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import{Questions} from '../Helpers/QuestionBank'
import '../App.css'
const EndScreen = () => {
  const {gameState , setGameState , score , setScore} = useContext(QuizContext)

  const RestartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished </h1>
      <h3>{score} / {Questions.length}</h3>
      <button onClick={RestartQuiz}>Restart Quiz </button>
    </div>
  )
}

export default EndScreen
