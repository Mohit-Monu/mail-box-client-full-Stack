require("dotenv").config()

const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")

const sequelize=require("./database")

//routes
const userRoutes=require("./routes/user")

//models
const USER=require("./models/USER")

const app=express()
app.use(cors())
app.use(bodyParser.json())

app.use(userRoutes)

sequelize
  .sync
  // {force:true}
  ()
  .then(app.listen(process.env.PORT))
  .catch((err) => {
    console.log(err);
  });
