const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   userName :{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   cPassword:{
    type:String,
    required:true
   },
   city:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
   },
   phone:{
    type:String,
    required:true,
   }
},
{
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
const UserModel = new mongoose.model("User",userSchema);
module.exports = UserModel;