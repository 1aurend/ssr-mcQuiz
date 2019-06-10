import React, { useState, useEffect } from 'react'
import Quiz from './Quiz.js'


function QuizContainer(props) {

  let theQs = []

  for (var i = 0; i < props.num; i++) {
    theQs.push(props.data[i])
  }

    console.log(theQs)

    return (
      <Quiz data={theQs} />
    )

  }


export default QuizContainer
