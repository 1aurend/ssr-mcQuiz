import makeQsReadable from '../server/tools/makeqsreadable'
import matchIDs from '../server/tools/matchids'
import Airtable from 'airtable'

require('dotenv').config()


async function loadQuiz() {

  const ldBase = new Airtable({apiKey: process.env.LD_AT_KEY}).base(process.env.LD_BASE_ID)

    let questions = []
    let choices = []
    let answers = []
    console.log(`Fetching Quiz Data -----------------------`);


    const Qs = ldBase('mtQuestions').select({
          maxRecords: 500,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {

          records.forEach(function(record) {
              console.log('Retrieved', record.get('questionText'));
              questions.push(record._rawJson)
          })
          fetchNextPage()

      }).then(() => {return 'got Qs!'})


    console.log(await Qs)

    console.log(JSON.stringify(questions, null, 4));
    return questions

    }



export default loadQuiz
