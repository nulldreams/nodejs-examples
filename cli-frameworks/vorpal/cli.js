#!/usr/bin/env node

const vorpal = require('vorpal')()
const commands = require('./commands')

vorpal
  .command('calc <number>', 'simple calc')
  .alias('h')
  .action(commands.calc)

vorpal
  .command('date', 'show current date')
  .alias('d')
  .action(commands.date)

vorpal
  .delimiter('jarvis => ')
  .show()