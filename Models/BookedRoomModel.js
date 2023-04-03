const mongoose = require("mongoose")

const bookedSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    hotel:{
        type:mongoose.Types.ObjectId,
        ref:"Hotel"
    },
    room:{
        type:mongoose.Types.ObjectId,
        ref:"Room"
    },
    price:{
        type:Number,
        required:true
    },
    checkIn:{
        type:Date,
    },
    checkOut:{
        type:Date,
    },
},{
    timestamps:true
});

const bookedModel = mongoose.model("bookedRoom",bookedSchema)
module.exports = bookedModel;