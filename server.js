const express = require("express")
const projectsRouter = require("./routers/projectsRouter")
const actionsRouter = require("./routers/actionsRouter")
const cors = require("cors")

const server = express()

server.use(express.json())
server.use(cors())

server.use("/api/projects", projectsRouter)
server.use("/api/actions", actionsRouter)

module.exports = server;