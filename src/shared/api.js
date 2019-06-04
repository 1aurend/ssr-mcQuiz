import axios from 'axios'


function loadQuiz(numQs) {

  return axios.post('https://www.secretmusiclab.com/tests', {
    num: numQs
  }).then(function (response) {
      return JSON.parse(response.data)
    })
    .catch(function (error) {
      console.log(error)
      return null
    })

}

export default loadQuiz
