import React, { useEffect, useState, useRef } from 'react'
import Chord from './Chord'
import Choice from './Choice'
import Results from './Results.js'
import Start from './Start'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import { pagegrid, question, choices, results, questionh2, questiontext } from './quizStyles'


function Quiz (props) {

  const [currentQ, nextQ] = useState(props.data[0].questions[0])
  const [redrawSwitch, flipSwitch] = useState(false)
  const [correctInput, isCorrect] = useState(true)
  const [endOfQ, doneQ] = useState(false)
  const [reset, startOver] = useState(false)

  const currentChord = useRef(props.data[0])
  const chordCount = useRef(0)
  const questionCount = useRef(0)
  const answerNum = useRef(0)
  const triesCount = useRef(0)
  const triesLog = useRef([])
  const startTime = useRef([Date.now()])
  const clickTime = useRef([])
  const input = useRef()
  const noteColors = useRef([])
  const answersSideBar = useRef([])

  //// TODO: combine a lot of the above refs into a nicely structured object with data about user performance



  function handleClick(choice) {

    input.current = choice
    triesCount.current = triesCount.current+1
    checkInput()
  }

  function checkInput() {
    if (input.current === currentQ.answers[answerNum.current]) {

      console.log('input.current: ' + input.current);
      console.log('answerNum.current: ' + answerNum.current);
      console.log('answers.length: ' + currentQ.answers.length);

      triesLog.current.push(triesCount.current)
      triesCount.current = 0

      if (answerNum.current === currentQ.answers.length-1) {
        noteColors.current = [...noteColors.current, input.current]
        answerNum.current = answerNum.current+1
        clickTime.current.push(Date.now())
        questionCount.current = questionCount.current+1
        console.log('next Q: ' + questionCount.current);
        flipSwitch(!redrawSwitch)
        answersSideBar.current = [...answersSideBar.current, currentQ.answers]
        doneQ(true)
      }
      else {
        noteColors.current = [...noteColors.current, input.current]
        answerNum.current = answerNum.current+1
        flipSwitch(!redrawSwitch)
        isCorrect(true)
      }
    }
    else {
      flipSwitch(!redrawSwitch)
      isCorrect(false)
    }
  }

  useEffect(() => {

    if (endOfQ === true) {
      setTimeout(() => {
        input.current = null
        noteColors.current = []
        answerNum.current = 0
        startTime.current.push(Date.now())
        if (questionCount.current < currentChord.current.questions.length) {
          console.log(JSON.stringify(currentChord.current.questions[questionCount.current], null, 4));
          nextQ(currentChord.current.questions[questionCount.current])
          doneQ(false)
        }
        else {
          chordCount.current = chordCount.current+1
          questionCount.current = 0
          if (chordCount.current < props.data.length) {
            currentChord.current = props.data[chordCount.current]
            console.log('this is chord ' + JSON.stringify(currentChord.current, null, 4));
            nextQ(props.data[chordCount.current].questions[questionCount.current])
            doneQ(false)
          }
          else {
            doneQ(false)
          }

        }
      }, 1000)
    }

  }, [endOfQ])


  if (reset) {
    return <Start />
  }

  if (answerNum.current < currentQ.answers.length && chordCount.current < props.data.length) {
      return (
        <div style={pagegrid}>
          <div style={question}>
            <h2 style={questiontext}>{currentQ.questionText}</h2>
            <Chord notes={currentChord.current.notes} octaves={currentChord.current.octaves} clef={currentChord.current.clef} colors={noteColors.current} />
            <SideBar text={answersSideBar.current} />
        </div>
          <div style={choices}>
            {currentQ.choices.map(choice => {return (
              <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} input={input.current} redButton={correctInput} />)})}
          </div>
        </div>
      )
  }
  else if (answerNum.current === currentQ.answers.length && chordCount.current !== props.data.length) {
    return (
      <div style={pagegrid}>
        <div style={question}>
          <h2 style={questiontext}>{currentQ.questionText}</h2>
          <Chord notes={currentChord.current.notes} octaves={currentChord.current.octaves} clef={currentChord.current.clef} colors={noteColors.current} />
          <h2>that's right!</h2>
          <SideBar text={answersSideBar.current} />
        </div>
        <div style={choices}>
          {currentQ.choices.map(choice => {return (
            <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} />)})}
        </div>
      </div>
    )
  }
  else if (chordCount.current === props.data.length) {
      return (
      <div style={pagegrid}>
        <div style={question}>
          <h2 style={questionh2}>End of Quiz!</h2>
        </div>
        <div style={results}>
          <Results times={clickTime.current} startTimes={startTime.current} tries={triesLog.current}/>
          <button onClick={(e) => {startOver(true)}}>Start Over</button>
        </div>
      </div>
    )
  }


}

export default Quiz
