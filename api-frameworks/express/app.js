const app = require('express')()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(port, (err) => {
  if (err) throw err

  console.log(`server listening on http://localhost:${port}`)
})

require('./src/routes')(app)
