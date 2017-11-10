# Examples

- Initialize
```javascript
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
```

- GET
```javascript
server.route({
    method: 'GET',
    path: '/user/{id}',
    handler: (req, reply) => {
        db.get(req.params.id, (err, user) => {

            reply({ user }).code(200)
        })
    }
})
```

- POST
```javascript
server.route({
    method: 'POST',
    path: '/user',
    handler: (req, reply) => {
        let body = req.payload

        db.add(body, (err, user) => {

            reply({ user }).code(200)
        })
    }
})
```

- PUT
```javascript
server.route({
    method: 'PUT',
    path: '/user',
    handler: (req, reply) => {
        let body = req.payload

        db.add(body, (err, user) => {

            reply({ user }).code(200)
        })
    }
})
```

- DELETE
```javascript
server.route({
    method: 'DELETE',
    path: '/user/{id}',
    handler: (req, reply) => {
        db.remove(req.params.id, (err, removed) => {

            reply({ removed }).code(200)
        })
    }
})
```
