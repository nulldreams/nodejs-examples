# Examples

- GET
```javascript
app.get('/user/:id', (req, res) => {
    db.get(req.params.id, (err, user) => {

        res.status(200).send({ user })
    })
})
```

- POST
```javascript
app.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
        done(data)
    })
})

/*
body object (application/json)
Para manipularmos o objeto, é necessário configurarmos o body-parser no nosso aplicativo
To manipulate the object, it is necessary to configure the body-parser in our application
{
    "name": "Igor Souza Martins",
    "login": "nulldreams@gmail.com",
    "password": "1234"
}
*/
app.post('/user', (req, res) => {
    let body = req.body

    db.add(body, (err, user) => {

        res.status(200).send({ user })
    })
})
```

- PUT
```javascript
app.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
        done(data)
    })
})

/*
body object (application/json)
Para manipularmos o objeto, é necessário configurarmos o body-parser no nosso aplicativo
To manipulate the object, it is necessary to configure the body-parser in our application
{
	"id": "0jEZZ6waOy35YfOk",
	"user": {
		"name": "Igor Souza Martins",
		"login": "nulldreams@gmail.com",
		"password": "123"
	}
}
*/
app.put('/user', (req, res) => {
    let body = req.body

    db.update(body, (err, user) => {

        res.status(200).send({ user })
    })
})
```

- DELETE
```javascript
app.delete('/user/:id', (req, res) => {
    db.remove(req.params.id, (err, removed) => {

        res.status(200).send({ removed })
    })
})
```
