const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
    },
    comment:{
        type:String,
    }
},
{
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  });

  const commentModel = new mongoose.model("Comment",commentSchema);
  module.exports = commentModel
