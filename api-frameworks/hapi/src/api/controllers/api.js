const db = require('../services/db')

exports.addUser = (req, reply) => {
  addUser(req.payload, (err, user) => {
    if (err) {
      reply({
        sucess: false,
        message: err
      }).code(500)
    }

    reply({
      sucess: true,
      user
    }).code(200)
  })
}

exports.listUser = (req, reply) => {
  listUser(req.params, (err, user) => {
    if (err) {
      reply({
        sucess: false,
        message: err
      }).code(500)
    }

    reply({
      sucess: true,
      user
    }).code(200)
  })
}

exports.listUsers = (req, reply) => {
  listUsers((err, users) => {
    if (err) {
      reply({
        sucess: false,
        message: err
      }).code(500)
    }

    reply({
      sucess: true,
      users
    }).code(200)
  })
}

exports.updateUser = (req, reply) => {
  updateUser(req.payload, (err, user) => {
    if (err) {
      reply({
        sucess: false,
        message: err
      }).code(500)
    }

    reply({
      sucess: true,
      user
    }).code(200)
  })
}

exports.removeUser = (req, reply) => {
  removeUser(req.params, (err, message) => {
    if (err) {
      reply({
        sucess: false,
        message: err
      }).code(500)
    }

    reply({
      sucess: true,
      message
    }).code(200)
  })
}

function addUser (user, cb) {
  if (!user) return cb('invalid parameters')

  db.add(user, (err, _res) => {
    if (err) return cb(err)

    cb(null, _res)
  })
}

function listUser (params, cb) {
  if (!params.id) return cb(`invalid id: ${typeof id}`)

  db.get(params.id, (err, _res) => {
    if (err) return cb(err)

    cb(null, _res)
  })
}

function listUsers (cb) {
  db.getAll((err, users) => {
    if (err) return cb(err)

    cb(null, users)
  })
}

function updateUser (body, cb) {
  if (!body) return cb(`invalid user: ${body}`)

  db.update(body.id, body.user, (err, user) => {
    if (err) return cb(err)

    if (!user) return cb(null, 'user does not exist')

    db.get(body.id, (err, user) => {
      if (err) return cb(err)

      cb(null, user)
    })
  })
}

function removeUser (params, cb) {
  if (!params.id) return cb(`invalid id: ${typeof id}`)

  db.remove(params.id, (err, removed) => {
    if (err) return cb(err)

    cb(null, 'user removed')
  })
}
