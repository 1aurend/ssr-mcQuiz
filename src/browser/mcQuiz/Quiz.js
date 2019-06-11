import React, { useEffect, useState, useRef } from 'react'
import Chord from './Chord'
import Choice from './Choice'
import Results from './Results.js'
import Start from './Start'
import { Link } from 'react-router-dom'
import { pagegrid, question, choices, results, questionh2, questiontext } from './quizStyles'


function Quiz (props) {

  console.log(props.data[0]);

  const [currentChord, nextChord] = useState(props.data[0])
  const [currentQ, nextQ] = useState(props.data[0].questions[0])
  // const [noteColors, flipColorSwitch] = useState(false)
  const [correctInput, isCorrect] = useState(0)
  const [wrongInput, isWrong] = useState(false)
  const [endOfQ, doneQ] = useState(false)
  const [reset, startOver] = useState(false)

  const startTime = useRef([Date.now()])
  const clickTime = useRef([])
  const answeredCount = useRef(0)
  const timesLog = useRef([])
  const responsesLog = useRef([])
  const inputs = useRef([])
  const average = useRef(0)
  const correct = useRef(0)


  function handleClick(choice) {

    inputs.current = [...inputs.current, choice]
    checkInput()
  }

  function checkInput() {
    console.log('now in checkInput...' + inputs.current);
    if (inputs.current[inputs.current.length-1] === currentQ.answers[inputs.current.length-1]) {
      if (inputs.current.length === currentQ.answers.length) {
        //lots of other things go here, maybe write an effect hook for when doneQ changes?
        answeredCount.current = answeredCount.current+1
        doneQ(true)
      }
      else {
        isCorrect(correctInput+1)
        isWrong(false)
        console.log('this is correctInput: ' + correctInput);
      }
    }
    else {
      console.log('getting here instead');
      isWrong(true)
    }
  }

  function doMath() {

    let time = (clickTime.current[(clickTime.current.length-1)]-startTime.current[(answeredCount.current-1)])/1000
    console.log('math= ' + time)
    timesLog.current = [...timesLog.current, time]

    console.log('reponses so far: ' + JSON.stringify(responsesLog.current));
    if (JSON.stringify(responsesLog.current[responsesLog.current.length-1].answer) === JSON.stringify(responsesLog.current[responsesLog.current.length-1].input)) {
      correct.current = correct.current+1
      console.log('number correct = ' + correct.current);
    }

    if (answeredCount.current === props.data.length) {
      const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length
      average.current = mean(timesLog.current)
      nextQ(null)
    }

  }


  if (correctInput < 3) {
    console.log('this is wrongInput ' + wrongInput);
    if (!wrongInput) {
      return (
        <div style={pagegrid}>
          <div style={question}>
            <h2 style={questiontext}>{currentQ.questionText}</h2>
            <Chord notes={currentChord.notes} octaves={currentChord.octaves} clef={currentChord.clef} inputs={inputs.current} />
          </div>
          <div style={choices}>
            {currentQ.choices.map(choice => {return (
              <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} />)})}
          </div>
        </div>
      )
    }
    else if (wrongInput) {
      return (
        <div style={pagegrid}>
          <div style={question}>
            <h2 style={questiontext}>{currentQ.questionText}</h2>
            <Chord notes={currentChord.notes} octaves={currentChord.octaves} clef={currentChord.clef} inputs={inputs.current} />
          </div>
          <div style={choices}>
            {currentQ.choices.map(choice => {return (
              <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} style='red' />)})}
          </div>
        </div>
      )
    }

  }
  else if (reset) {
    return <Start />
  }
  else {
      return (
      <div style={pagegrid}>
        <div style={question}>
          <h2 style={questionh2}>End of Quiz!</h2>
        </div>
        <div style={results}>
          <Results average={average.current} correct={correct.current} totalQs={props.data.length}/>
          <button onClick={(e) => {startOver(true)}}>Start Over</button>
        </div>
      </div>
    )
  }


}

export default Quiz
