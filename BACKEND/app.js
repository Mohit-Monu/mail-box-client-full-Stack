require("dotenv").config()

const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")

const sequelize=require("./database")

//routes
const userRoutes=require("./routes/user")
const messageRoutes=require("./routes/message")
//models
const USER=require("./models/USER")
const MESSAGES=require("./models/MESSAGES")

const app=express()
app.use(cors())
app.use(bodyParser.json())

app.use(userRoutes)
app.use(messageRoutes)

sequelize
  .sync(
  // {force:true}
  )
  .then(app.listen(process.env.PORT))
  .catch((err) => {
    console.log(err);
  });
