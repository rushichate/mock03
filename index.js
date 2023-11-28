const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.route")
const { auth } = require("./middleware/authorization")
const { moviesRouter } = require("./routes/movies.route")
const { reviewRouter } = require("./routes/review.route")
const app = express()
require("dotenv").config()
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({message:"Welcome to Movie rwview app"})
})
app.use("/users",userRouter)
app.use(auth)
app.use("/movies",moviesRouter)
app.use("/reviews",reviewRouter)


app.listen(process.env.port,async()=>{
    try{
      await connection
      console.log("Connected to DB and server is running")

    }catch(error){
        console.log(error)
    }
})