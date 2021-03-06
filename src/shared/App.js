import React from 'react'
import Start from '../browser/mcQuiz/Start'
import QuizContainer from '../browser/mcQuiz/QuizContainer'
import { Route, Switch } from 'react-router'


function App() {

    return (
      <Switch>
        <Route path='/' exact component={Start} />
        <Route path='/quiz' component={QuizContainer} />
      </Switch>
    )

  }


export default App
