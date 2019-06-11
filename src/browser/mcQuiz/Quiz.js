import React, { useEffect, useState, useRef } from 'react'
import Chord from './Chord'
import Choice from './Choice'
import Results from './Results.js'
import Start from './Start'
import { Link } from 'react-router-dom'
import { pagegrid, question, choices, results, questionh2, questiontext } from './quizStyles'


function Quiz (props) {

  const [currentQ, nextQ] = useState(props.data[0].questions[0])
  const [redrawSwitch, flipSwitch] = useState(false)
  const [correctInput, isCorrect] = useState(true)
  const [endOfQ, doneQ] = useState(false)
  const [reset, startOver] = useState(false)

  const currentChord = useRef(props.data[0])
  const noteNum = useRef(1)
  const input = useRef()
  const noteColors = useRef([])
  const startTime = useRef([Date.now()])
  const clickTime = useRef([])
  const chordCount = useRef(0)
  const questionCount = useRef(0)

  const timesLog = useRef([])
  const average = useRef(0)
  const correct = useRef(0)


  function handleClick(choice) {

    input.current = choice
    checkInput()
  }

  function checkInput() {
    if (input.current === currentQ.answers[noteNum.current-1]) {

      console.log('input.current: ' + input.current);
      console.log('noteNum.current: ' + noteNum.current);
      console.log('answers.length: ' + currentQ.answers.length);

      if (noteNum.current === currentQ.answers.length) {
        console.log('here!');
        noteColors.current = [...noteColors.current, input.current]
        noteNum.current = noteNum.current+1
        clickTime.current.push(Date.now())
        questionCount.current = questionCount.current+1
        console.log('next Q: ' + questionCount.current);
        flipSwitch(!redrawSwitch)
        doneQ(true)
      }
      else {
        noteColors.current = [...noteColors.current, input.current]
        noteNum.current = noteNum.current+1
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
      console.log('now here!');
      setTimeout(() => {
        input.current = null
        noteColors.current = []
        noteNum.current = 1
        startTime.current.push(Date.now())
        if (questionCount.current < currentChord.current.questions.length) {
          console.log('here!');
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

  // function doMath() {
  //
  //   let time = (clickTime.current[(clickTime.current.length-1)]-startTime.current[(chordCount.current-1)])/1000
  //   console.log('math= ' + time)
  //   timesLog.current = [...timesLog.current, time]
  //
  //   console.log('reponses so far: ' + JSON.stringify(responsesLog.current));
  //   if (JSON.stringify(responsesLog.current[responsesLog.current.length-1].answer) === JSON.stringify(responsesLog.current[responsesLog.current.length-1].input)) {
  //     correct.current = correct.current+1
  //     console.log('number correct = ' + correct.current);
  //   }
  //
  //   if (chordCount.current === props.data.length) {
  //     const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length
  //     average.current = mean(timesLog.current)
  //     nextQ(null)
  //   }
  //
  // }


  if (noteNum.current-1 < currentQ.answers.length && chordCount.current !== props.data.length) {
    if (correctInput || correctInput === null) {
      return (
        <div style={pagegrid}>
          <div style={question}>
            <h2 style={questiontext}>{currentQ.questionText}</h2>
            <Chord notes={currentChord.current.notes} octaves={currentChord.current.octaves} clef={currentChord.current.clef} colors={noteColors.current} />
          </div>
          <div style={choices}>
            {currentQ.choices.map(choice => {return (
              <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} />)})}
          </div>
        </div>
      )
    }
    else if (!correctInput) {
      return (
        <div style={pagegrid}>
          <div style={question}>
            <h2 style={questiontext}>{currentQ.questionText}</h2>
            <Chord notes={currentChord.current.notes} octaves={currentChord.current.octaves} clef={currentChord.current.clef} colors={noteColors.current} />
          </div>
          <div style={choices}>
            {currentQ.choices.map(choice => {return (
              <Choice onClick={() => handleClick(choice)} choice={choice} key={choice} input={input.current} wrong={true} />)})}
          </div>
        </div>
      )
    }

  }
  else if (reset) {
    return <Start />
  }
  else if (noteNum.current-1 === currentQ.answers.length && chordCount.current !== props.data.length) {
    return (
      <div style={pagegrid}>
        <div style={question}>
          <h2 style={questiontext}>{currentQ.questionText}</h2>
          <Chord notes={currentChord.current.notes} octaves={currentChord.current.octaves} clef={currentChord.current.clef} colors={noteColors.current} />
          <h2>that's right!</h2>
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
          <Results average={average.current} times={clickTime.current} startTimes={startTime.current}/>
          <button onClick={(e) => {startOver(true)}}>Start Over</button>
        </div>
      </div>
    )
  }


}

export default Quiz
