import Start from '../browser/mcQuiz/Start.js'
import QuizContainer from '../browser/mcQuiz/QuizContainer.js'


const routes = [

  {
    path: '/',
    exact: true,
    component: Start,
    needsData: true
  },
  {
    path: '/quiz',
    exact: false,
    component: QuizContainer
  }

]


export default routes
