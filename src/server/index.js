import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import App from '../shared/App'
import React from 'react'
import serialize from "serialize-javascript"
import loadQuiz from '../shared/api'
import { StaticRouter, matchPath } from 'react-router-dom'
import routes from '../shared/routes'


const app = express()

app.use(cors())
app.use(express.static("public"))


app.get("*", (req, res, next) => {

  const reqRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {}

  const data = reqRoute.needsData ? loadQuiz(100) : Promise.resolve()

  data.then((data) => {

    const context = { data }

    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>MC Quiz with SSR</title>
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
          <body>
            <div id='app'>${markup}</div>
          </body>
        </html>
      `
    )
  }).catch(next)

})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
