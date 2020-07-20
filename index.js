const app = require("./server")

const port = process.env.port || 5000;

app.listen(port, ()=>{
    console.log(`The Magic is on http://localhost:${port}`)
})