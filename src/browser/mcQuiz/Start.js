import React, { useState, useRef } from 'react'
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

    // let test = quizData.slice(3)


  const [numQs, setNum] = useState(1)
  const [ready, launchQuiz] = useState(false)
  const userId = useRef('somebody')
  const sessionId = useRef(Date.now())


  if (!ready) {
    return (
      <div style={pagegrid}>
        <div style={question}>
          <h2 style={questionh2}>Music Theory Training Prototype</h2>
          <h3 style={questionh3}>Choose a number of chords (1 chord = 4 questions) to try it.</h3>
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
      <QuizContainer num={numQs} data={quizData} userId={userId.current} sessionId={sessionId.current} />
    )
  }


}

export default Start
