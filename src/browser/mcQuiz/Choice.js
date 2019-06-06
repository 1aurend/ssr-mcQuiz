import React from 'react'
import { choicebutton } from './quizStyles'


function Choice(props) {

  return (
    <button style={choicebutton} onClick={props.onClick}>{props.choice}</button>
  )

}

export default Choice
