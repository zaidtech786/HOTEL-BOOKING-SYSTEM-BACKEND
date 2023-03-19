const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   type :{
    type:String,
    required:true
   },
   city:{
    type:String,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   distance:{
    type:String,
    required:true,
   },
   title:{
    type:String,
    required:true,
   },
   desc:{
    type:String,
    required:true,
   },
   isFeatured:{
    type:Boolean,
    default:false
   },
   rooms:{
    type:[String]
   },
   price:{
    type:Number,
    required:true,
   },
   photos:{
    type:[String]
   }
},
{
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
const hotelModel = new mongoose.model("Hotel",hotelSchema);
module.exports = hotelModel;