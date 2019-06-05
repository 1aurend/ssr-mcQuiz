import makeQsReadable from '../server/tools/makeqsreadable'
import matchIDs from '../server/tools/matchids'
import Airtable from 'airtable'

require('dotenv').config()


async function loadQuiz() {

  const gameLabBase = new Airtable({apiKey: process.env.GAMELAB_AT_KEY}).base(process.env.GAMELAB_BASE_ID)

    let questions = []
    let choices = []
    let answers = []
    console.log(`Fetching Quiz Data -----------------------`);


    const Qs = gameLabBase('flashcardQs').select({
          maxRecords: 100,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {

          records.forEach(function(record) {
              console.log('Retrieved', record.get('questionText'));
              questions.push(record._rawJson)
          })
          fetchNextPage()

      }).then(() => {return 'got Qs!'})

    const As = gameLabBase('fcAnswers').select({
          maxRecords: 100,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {

          records.forEach(function(record) {
              console.log('Retrieved', record.get('name'));
              answers.push(record._rawJson)
          })
          fetchNextPage()

      }).then(() => {return 'got As!'})

    const Cs = gameLabBase('fcChoices').select({
          maxRecords: 100,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {

          records.forEach(function(record) {
              console.log('Retrieved', record.get('name'));
              choices.push(record._rawJson)
          })
          fetchNextPage()

      }).then(() => {return 'got Cs!'})


    console.log(await Qs)
    console.log(await As)
    console.log(await Cs)

    const quizData = matchIDs(questions, answers, choices, makeQsReadable)
    console.log(JSON.stringify(quizData, null, 4));
    return quizData


}

export default loadQuiz
