import React from 'react'


function Results(props) {

  return (
    <React.Fragment>
      <h2>Your Results:</h2>
      <p>{props.correct} out of {props.totalQs} correct</p>
      <p>{props.average} seconds average per flashcard</p>
    </React.Fragment>
  )

}

export default Results
