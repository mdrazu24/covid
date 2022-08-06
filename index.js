const express = require("express")
const app = express()
const cookieParser = require('cookie-parser') 
require("dotenv").config({ path: "./config.env" })
const morgan = require("morgan")

const xss = require("xss-clean")

const helmet = require("helmet")


const port = process.env.PORT || 4000

process.on("uncaughtException", (err) => {
  console.log("uncaughtException Error... System will terminate soon")

  console.log(err.name, err.message, err.stack)

  process.exit(1)
})

app.set("view engine", "ejs")
app.use(express.static("public"))


app.use(helmet())
app.use(express.json({ limit: "10MB" }))
app.use(cookieParser())
app.use(morgan("dev"))
app.use(xss())

// routes will be here
app.get("/report", (req, res) => {
  res.render("pages/report")
})

app.get("/variants", (req, res) => {
  res.render("pages/variants")
})

app.get("/quiz", (req, res) => {
  res.render("pages/quiz")
})

app.all("*", (req, res) => {
  res.writeHead(301, {
    Location: "http://" + req.headers["host"] + "/report",
  })
  return res.end()

})

// server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection Error... System will terminate soon")
  console.log(err.name, err.message, err.stack)
  server.close(() => {
    process.exit(1)
  })
})