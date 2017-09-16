const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'assets')))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Express server running on port', port)
})
