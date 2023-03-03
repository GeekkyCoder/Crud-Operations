const express = require("express")
const cors = require("cors")
const path = require("path")

const userRouter = require("./routes/users/users.router")

const app = express()

app.use((req,res,next) => {
    next()
    console.log(`${req.method}${req.url}`)
})

// middlewares

app.use(express.json())

app.use(cors({
    origin: "https://crud-operations-i2vk.vercel.app/"
}))

app.use(express.static(path.join(__dirname,"..","public")))

// listen for request using app middleware
app.use("/users",userRouter)


module.exports = app