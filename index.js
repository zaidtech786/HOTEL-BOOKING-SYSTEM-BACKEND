const express = require("express");
const dotenv = require("dotenv");
const cors=require('cors');
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
const bodyParser=require('body-parser');
app.use(bodyParser.json())

app.listen(process.env.PORT , () => {
    console.log("Server Started on port " +process.env.PORT )
});

// Getting Models files
const userModel = require("./Models/userModel");

// Getting Routes
const user = require("./Routes/userRoute")
app.use("/hotel",require("./Routes/HotelRoute"))
const rooms = require("./Routes/RoomRoute")
app.use("/api",user)
app.use("/room",rooms)



// Getting MongoDb Setup File
const MongoConnection=require("./Database/conn");

