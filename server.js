const express = require('express')
const path = require('path')

express()
  .use(express.static(path.join(__dirname, 'src')))
  .listen(process.env.PORT || 5000)
