const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./db/db")

// Load config
dotenv.config({ path: "./config/config.env" })

// Connect to DB
connectDB()

// init app
const app = express()

// Body Parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// CORS
app.use(cors())

// route to posts
app.use("/api/posts", require("./routes/api/posts"))

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"))

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"))
}

const port = process.env.PORT || 5000

app.listen(port, () => `Server started on port ${port}`)
