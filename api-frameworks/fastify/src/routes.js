const api = require('./api/index')

module.exports = (fastify) => {
  fastify.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      done(data)
    })
  })

  fastify.post('/user', api.userController.addUser)
  fastify.get('/user/:id', api.userController.listUser)
  fastify.get('/users', api.userController.listUsers)
  fastify.put('/user', api.userController.updateUser)
  fastify.delete('/user/:id', api.userController.removeUser)
}
