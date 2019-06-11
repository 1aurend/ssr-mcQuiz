import makeQsReadable from '../server/tools/makeqsreadable'
import matchIDs from '../server/tools/matchids'
import Airtable from 'airtable'
import groupChords from '../server/tools/groupChords'

require('dotenv').config()


async function loadQuiz() {

  const ldBase = new Airtable({apiKey: process.env.LD_AT_KEY}).base(process.env.LD_BASE_ID)

    let data = []

    console.log(`Fetching Quiz Data -----------------------`);


    const Qs = ldBase('mtQuestions').select({
          maxRecords: 16,
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {

          records.forEach(function(record) {
              console.log('Retrieved', record.get('questionText'));
              questions.push(record._rawJson)
          })
          fetchNextPage()

      }).then(() => {return 'got Qs!'})


    console.log(await Qs)

    const chords = groupChords(data)
    console.log(chords)
    return chords

    }



export default loadQuiz
