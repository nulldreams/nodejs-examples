const db = require('../services/db')

exports.addUser = (req, res) => {
  addUser(req.body, (err, user) => {
    if (err) {
      res.status(500).send({
        sucess: false,
        message: err
      })
    }

    res.status(200).send({
      sucess: true,
      user
    })
  })
}

exports.listUser = (req, res) => {
  listUser(req.params, (err, user) => {
    console.log(user)
    if (err) {
      res.status(500).send({
        sucess: false,
        message: err
      })
    }

    res.status(200).send({
      sucess: true,
      user
    })
  })
}

exports.listUsers = (req, res) => {
  listUsers((err, users) => {
    if (err) {
      res.status(500).send({
        sucess: false,
        message: err
      })
    }

    res.status(200).send({
      sucess: true,
      users
    })
  })
}

exports.updateUser = (req, res) => {
  updateUser(req.body, (err, user) => {
    if (err) {
      res.status(500).send({
        sucess: false,
        message: err
      })
    }

    res.status(200).send({
      sucess: true,
      user
    })
  })
}

exports.removeUser = (req, res) => {
  removeUser(req.params, (err, message) => {
    if (err) {
      res.status(500).send({
        sucess: false,
        message: err
      })
    }

    res.status(200).send({
      sucess: true,
      message
    })
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
