const app = require('./server')

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App is listening on server ${PORT}`)
})