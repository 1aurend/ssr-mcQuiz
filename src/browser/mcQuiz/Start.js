import React, { useState } from 'react'
import { pagegrid, question, startinputs, questionh2, questionh3 } from './quizStyles'
import QuizSelector from './QuizSelector.js'
import Go from './Go.js'
import QuizContainer from './QuizContainer'


function Start(props) {

  let quizData
    if (__isBrowser__) {
      quizData = window.__INITIAL_DATA__
    } else {
      quizData = props.staticContext.data
    }


  const [numQs, setNum] = useState(1)
  const [ready, launchQuiz] = useState(false)
  console.log('this is ready: ' + ready);

  if (!ready) {
    return (
      <div style={pagegrid}>
        <div style={question}>
          <h2 style={questionh2}>Flashcard App Prototype</h2>
          <h3 style={questionh3}>Choose a number of flashcards to try it.</h3>
        </div>
        <div style={startinputs}>
          <QuizSelector onChange={(e) => {setNum(e.target.value)}}/>
          <Go onClick={(e) => {launchQuiz(true)}}/>
        </div>
      </div>
    )
  }
  else if (ready) {
    return (
      <QuizContainer num={numQs} data={quizData} />
    )
  }


}

export default Start
