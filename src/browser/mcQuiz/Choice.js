import React from 'react'
import { choicebutton } from './quizStyles'


function Choice(props) {

  let style = choicebutton

if (props.wrong) {
  if (props.choice === props.input) {
    style = {...style, backgroundColor: 'red'}
  }
}


  return (
    <button style={style} onClick={props.onClick}>{props.choice}</button>
  )

}

export default Choice
