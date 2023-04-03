const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true 
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    hotelName:{
     type:mongoose.Schema.ObjectId,
     ref:"Hotel"
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:{
        type:[Number],
    },
    isBooked:{
        type:Boolean,
        default:false
    },
   
},{
    timestamps:true
});
const roomModel = new mongoose.model("Room",roomSchema)

module.exports = roomModel