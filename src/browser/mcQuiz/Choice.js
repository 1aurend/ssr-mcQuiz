import React from 'react'
import { choicebutton } from './quizStyles'


function Choice(props) {

  let style = {...choicebutton, backgroundColor: props.style}

  return (
    <button style={style} onClick={props.onClick}>{props.choice}</button>
  )

}

export default Choice
