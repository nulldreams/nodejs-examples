const api = require('./api/index')

module.exports = (app) => {
  app.post('/user', api.userController.addUser)
  app.get('/user/:id', api.userController.listUser)
  app.get('/users', api.userController.listUsers)
  app.put('/user', api.userController.updateUser)
  app.delete('/user/:id', api.userController.removeUser)
}
