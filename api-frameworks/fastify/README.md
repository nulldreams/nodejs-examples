# Examples

- GET
```javascript
fastify.get('/user/:id', (req, reply) => {
    db.get(req.params.id, (err, user) => {

        reply.code(200).send({ user })
    })
})
```

- POST
```javascript
fastify.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
        done(data)
    })
})

/*
body object (application/json)
Nativamente o Fastify suporta apenas o tipo de conteúdo application/json
Natively, Fastify only supports the 'application/json' content type
{
    "name": "Igor Souza Martins",
    "login": "nulldreams@gmail.com",
    "password": "1234"
}
*/
fastify.post('/user', (req, reply) => {
    let body = req.body

    db.add(body, (err, user) => {

        reply.code(200).send({ user })
    })
})
```

- PUT
```javascript
fastify.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
        done(data)
    })
})

/*
body object (application/json)
Nativamente o Fastify suporta apenas o tipo de conteúdo application/json
Natively, Fastify only supports the 'application/json' content type
{
    "name": "Igor Souza Martins",
    "login": "nulldreams@gmail.com",
    "password": "1234"
}
*/
fastify.put('/user', (req, reply) => {
    let body = req.body

    db.update(body, (err, user) => {

        reply.code(200).send({ user })
    })
})
```

- DELETE
```javascript
fastify.delete('/user/:id', (req, reply) => {
    db.remove(req.params.id, (err, removed) => {

        reply.code(200).send({ removed })
    })
})
```
