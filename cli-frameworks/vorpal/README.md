# [Vorpal](https://github.com/dthree/vorpal)

## Examples

- Creating new command
```javascript
#!/usr/bin/env node

const vorpal = require('vorpal')()

vorpal
  .command('hello <name>', 'say hello')
  .alias('h')
  .action((args, done) => {
    const name = args.name
  })
```
- Define the delimiter
```javascript
vorpal
  .delimiter('jarvis => ')
```

- Show logs
```javascript
vorpal.log('Hello darkness my old friend')
```

- Start
```javascript
vorpal.show()
```