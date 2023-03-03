const express = require("express")
const { getAllUsers, getAUser, postAUser,deleteAUser } = require("./users.controller")

const app = express()

const userRouter = express.Router()

app.use(express.json())

userRouter.get("/", getAllUsers)
userRouter.post("/", postAUser)
userRouter.delete("/:id",deleteAUser)
userRouter.get("/:id",getAUser)


module.exports = userRouter