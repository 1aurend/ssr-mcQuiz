import React from 'react'
import { choicebutton } from './quizStyles'


function Choice(props) {

  console.log(props.redButton);

  let style = choicebutton

if (props.redButton[props.redButton.length-1]) {
    console.log('here');
  if (props.choice === props.input) {
    console.log('and here');
    style = {...style, backgroundColor: 'red'}
  }
}


  return (
    <button style={style} onClick={props.onClick}>{props.choice}</button>
  )

}

export default Choice
