import React from 'react'
import Start from '../browser/mcQuiz/Start'
import QuizContainer from '../browser/mcQuiz/QuizContainer'
import { Route, Switch } from 'react-router'


function App(props) {

  console.log(props.data);

    return (
      <Switch>
        <Route path='/' exact render={props => <Start {...props} data={props.data}/>} />
        <Route path='/quiz' render={props => <QuizContainer {...props} />} />
      </Switch>
    )

  }


export default App
