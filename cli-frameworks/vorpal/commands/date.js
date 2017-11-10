const vorpal = require('vorpal')()

const date = (args, done) => {
  vorpal.log(`The current date is ${new Date()}`)
  done()
}

module.exports = date
