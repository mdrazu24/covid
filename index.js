const express = require("express")
const app = express()
const cookieParser = require('cookie-parser') 
require("dotenv").config({ path: "./config.env" })
const morgan = require("morgan")
const fs = require("fs")
const xss = require("xss-clean")
const helmet = require("helmet")
const port = process.env.PORT || 4000
const mysql = require("mysql")
const bodyParser = require('body-parser')
process.on("uncaughtException", (err) => {
  console.log("uncaughtException Error... System will terminate soon")

  console.log(err.name, err.message, err.stack)

  process.exit(1)
})

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password : "1234@1234",
  database: "pokemon",
  multipleStatements: true,
})


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static("public"))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(morgan("dev"))
app.use(xss())

// routes will be here
app.get("/", async (req, res) => {
     
//get all pokemons
   db.query("SELECT * FROM exam_monsters;" , ((err, result) => {
    if (err) {
      throw err
    } else {
        res.render("Home", {pokemons : result})

    }
  }) )

})

app.get("/list", (req, res) => {
  res.render("List")
})

app.get("/quiz", (req, res) => {
  res.render("Quiz")
})

app.get("/update", (req, res) => {
  res.render("Update")
})

app.post("/list",(req, res) => {
  const elementName = ["Fire","Electric","Water","Gas","Normal"]
  // console.log(req.body)
  res.json(req.body)
    // res.render("pages/List")
})

// app.all("*", (req, res) => {
//   res.writeHead(301, {
//     Location: "http://" + req.headers["host"] + "/report",
//   })
//   return res.end()

// })

// server
app.listen(port, async () => {
  db.connect((err) => {
    if (err) {
      throw err
    }
    console.log("DB connected")
    
  })

  const pokemons = fs.readFileSync('./pokemon.sql').toString();
     await db.query(pokemons, (err, result) => {
      if (err) {
        throw err
      }
      console.log("query completed")
    })
    console.log(`Server is running on port ${port}`)
})


process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection Error... System will terminate soon")
  console.log(err.name, err.message, err.stack)
  server.close(() => {
    process.exit(1)
  })
})