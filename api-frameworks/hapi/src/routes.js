const api = require('./api/index')

module.exports = (server) => {
  server.route([{
    method: 'POST',
    path: '/user',
    handler: api.userController.addUser
  }, {
    method: 'GET',
    path: '/user/{id}',
    handler: api.userController.listUser
  }, {
    method: 'GET',
    path: '/users',
    handler: api.userController.listUsers
  }, {
    method: 'PUT',
    path: '/user',
    handler: api.userController.updateUser
  }, {
    method: 'DELETE',
    path: '/user/{id}',
    handler: api.userController.removeUser
  }])
}
