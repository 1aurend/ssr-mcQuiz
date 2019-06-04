import React, { useState, useEffect } from 'react'
import Quiz from './Quiz.js'


function QuizContainer(props) {

  let theQs = []
  console.log(props.location.state);

  for (var i = 0; i < props.location.state.numQs; i++) {
    theQs.push(props.location.state.data[i])
  }

    console.log(theQs)

    return (
      <Quiz data={theQs} />
    )

  }


export default QuizContainer
