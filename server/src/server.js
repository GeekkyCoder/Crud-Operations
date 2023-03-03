const app  = require("./app")
const http = require("http")
const mongoose = require("mongoose")

const {saveDocumentsIntoDataBase,users} = require("./modal/users.modal")


const PORT = 8000

const server = http.createServer(app)

const MONGO_URL = "mongodb+srv://Faraz:x3l4UGOadxlRJfFS@userscluster.tpgbw4u.mongodb.net/?retryWrites=true&w=majority"


mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready!")
  })
  
  mongoose.connection.on("error", (err) => {
    console.log("failed")
     console.error(`${err}`)
  })
  

async function startServer(){
    await mongoose.connect(MONGO_URL)
    await saveDocumentsIntoDataBase(users)
    server.listen(PORT,() => {
     
        console.log(`listening at port ${PORT}`)
    })
}

startServer()

