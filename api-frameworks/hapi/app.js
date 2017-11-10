const Hapi = require('hapi')
const server = new Hapi.Server()
const port = process.env.PORT || 5000
server.connection({
  host: 'localhost',
  port
})

server.start((err) => {
  if (err) throw err

  console.log(`server listening on ${server.info.uri}`)
})

require('./src/routes')(server)
