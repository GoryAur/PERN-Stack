const app = require('./app')
const { server } = require('./config')


app.listen(server.port, () => {
  console.log(`Server on port: ${server.port}`)
})
