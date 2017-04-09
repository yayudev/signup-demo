import { resolve } from 'path'
import { readFile } from 'fs'
import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import { App } from './src/App'
import { store } from './src/store'
import { flushToHTML } from 'styled-jsx/server'

const app = express()
const port = process.env.PORT || 3000


// Paths
const buildDir = resolve(__dirname, 'build')
const staticDir = resolve(buildDir, 'static')
const htmlIndex = resolve(buildDir, 'index.html')

// Static files
app.use('/static', express.static(staticDir))

/// Serve app
app.use('/', function (req, res) {
  readFile(htmlIndex, 'utf8', (err, htmlData)=>{
    if (err) {
      return res.status(404)
    }

    const appContent = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const styles = flushToHTML()

    const RenderedApp = htmlData
      .replace('{{SSR}}', appContent)
      .replace('{{STYLES}}', styles)

    res.send(RenderedApp)
  })
})


app.listen(port, _ => {
  console.log(`Server listening on port ${port}`)
})
