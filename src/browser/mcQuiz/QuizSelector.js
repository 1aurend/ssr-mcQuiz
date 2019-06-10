import React from 'react'
import { selector } from './quizStyles'

function QuizSelector(props) {

return (
  <div style={selector}>
    <select onChange={props.onChange}>
      <option value='1'>1</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </div>
)

} //eventually other options can go in here

export default QuizSelector
