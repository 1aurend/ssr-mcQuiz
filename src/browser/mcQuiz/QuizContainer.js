import React, { useState, useEffect } from 'react'
import Quiz from './Quiz.js'


function QuizContainer(props) {

  let quiz = []

  for (var i = 0; i < props.num; i++) {
    quiz.push(props.data[i])
  }

  //// TODO: add a randomizer function here

    return (
      <Quiz data={quiz} />
    )

  }


export default QuizContainer
