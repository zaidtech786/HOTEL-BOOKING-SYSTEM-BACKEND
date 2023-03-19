const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGO_URI;

    mongoose.connect(uri , {
        useUnifiedTopology:true,
         useNewUrlParser: true,
    }).then( () => {
        console.log("DataBase Connected")
    }).catch(err => {
        console.log("Something was wrong",err)
    })

