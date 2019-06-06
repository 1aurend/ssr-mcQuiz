import "@babel/polyfill"
import express from "express"
import { renderToString } from "react-dom/server"
import App from '../shared/App'
import React from 'react'
import serialize from "serialize-javascript"
import loadQuiz from '../shared/atfetch'
import { StaticRouter, matchPath } from 'react-router-dom'
import routes from '../shared/routes'
import matchIDs from './tools/matchids'


const app = express()

app.use(express.static("public"))


app.get("*", (req, res, next) => {

  const reqRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {}

  const data = reqRoute.needsData ? loadQuiz(matchIDs) : Promise.resolve()

  data.then((data) => {

    const context = { data }

    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

      res.send(`
        <!DOCTYPE html>
        <html style="margin:0; height:100%;">
          <head>
            <title>MC Quiz with SSR</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
          <body style="margin:0; height:100%;">
            <div id='app' style="margin:0; height:100%;">${markup}</div>
          </body>
        </html>
      `
    )
  }).catch(next)

})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
