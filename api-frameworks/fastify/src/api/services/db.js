const path = require('path')
const Datastore = require('nedb')

const db = new Datastore({
  filename: path.join(__dirname, '..', 'data', `user.db`)
})

db.loadDatabase()
db.persistence.setAutocompactionInterval(1000 * 60 * 1)

function getAll (cb) {
  db.find({}, (err, users) => {
    if (err) return cb(err)

    cb(null, users)
  })
}

function get (id, cb) {
  db.findOne({
    _id: id
  }, cb)
}

function update (id, user, cb) {
  db.update({
    _id: id
  },
        user,
        cb
    )
}

function add (user, cb) {
  db.insert({
    user
  }, (err, _user) => {
    if (err) return cb(err)

    cb(null, _user)
  })
}

function remove (id, cb) {
  db.remove({
    _id: id
  }, (err, removed) => {
    if (err) return cb(err)

    cb(null, removed)
  })
}

module.exports = {
  get,
  getAll,
  add,
  remove,
  update
}
