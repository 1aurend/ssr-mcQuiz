import React from 'react'


function Results(props) {

  console.log(props.startTimes);
  console.log(props.times);

  let times = []

  for (var i = 0; i < props.times.length; i++) {
    times.push((props.times[i]-props.startTimes[i])/1000)
  }

  const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length
  let average = mean(times)
  let tries = mean(props.tries)

  return (
    <React.Fragment>
      <h2>Your Results:</h2>
      <p>{average} seconds average per question</p>
      <p>{tries} tries average per question</p>
    </React.Fragment>
  )

}

export default Results
