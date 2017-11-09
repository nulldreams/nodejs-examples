const db = require('../services/db')

exports.addUser = (req, reply) => {
  addUser(req.body, (err, user) => {
    if (err) {
      reply.code(500).send({
        sucess: false,
        message: err
      })
    }

    reply.code(200).send({
      sucess: true,
      user
    })
  })
}

exports.listUser = (req, reply) => {
  listUser(req.params, (err, user) => {
    if (err) {
      reply.code(500).send({
        sucess: false,
        message: err
      })
    }

    reply.code(200).send({
      sucess: true,
      user
    })
  })
}

exports.listUsers = (req, reply) => {
  listUsers((err, users) => {
    if (err) {
      reply.code(500).send({
        sucess: false,
        message: err
      })
    }

    reply.code(200).send({
      sucess: true,
      users
    })
  })
}

exports.updateUser = (req, reply) => {
  updateUser(req.body, (err, user) => {
    if (err) {
      reply.code(500).send({
        sucess: false,
        message: err
      })
    }

    reply.code(200).send({
      sucess: true,
      user
    })
  })
}

exports.removeUser = (req, reply) => {
  removeUser(req.params, (err, message) => {
    if (err) {
      reply.code(500).send({
        sucess: false,
        message: err
      })
    }

    reply.code(200).send({
      sucess: true,
      message
    })
  })
}

function addUser (user, cb) {
  if (!user) cb('invalid parameters')

  db.add(user, (err, res) => {
    if (err) return cb(err)

    cb(null, res.user)
  })
}

function listUser (params, cb) {
  if (!params.id) return cb(`invalid id: ${typeof id}`)

  db.get(params.id, (err, res) => {
    if (err) return cb(err)

    cb(null, res.user)
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
