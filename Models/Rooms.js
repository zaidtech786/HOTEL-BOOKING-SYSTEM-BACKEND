const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    hotelName:{
     type:mongoose.Schema.ObjectId,
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:{
        type:[Number],
    },
},{
    timestamps:true
});
const roomModel = new mongoose.model("Room",roomSchema)

module.exports = roomModel