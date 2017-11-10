const vorpal = require('vorpal')()

const calc = (args, done) => {
  vorpal.log(2 * args.number)
  done()
}

module.exports = calc
