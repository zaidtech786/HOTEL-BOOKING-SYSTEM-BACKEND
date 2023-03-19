const RoomModel = require("../Models/Rooms")
const hotelModel = require("../Models/hotelModel");


const AddRooms = async(req,res) => {
    const {title,price,maxPeople,desc,roomNumbers} = req.body
  const room = new RoomModel({
    title,
    price,
    maxPeople,
    desc,
    roomNumbers
  });
  const {id} = req.params;
  let hotel;
  try {
    hotel = await hotelModel.findByIdAndUpdate(id,{
        $push:{rooms:room._id}
    })
   
    await room.save()
  } catch (error) {
    console.log(error)
  }
  res.send({room})
}

// getAll the the Rooms
const getAllRooms = async(req,res) => {
    let rooms;
    try {
         rooms = await RoomModel.find({})
    } catch (error) {
        console.log(error)
    }
    if(rooms){
        return res.send({rooms})
    }
    return res.send({message:"Unable to fetch rooms details"})
}

// get Room by ID
const getRoomById = async(req,res) => {
    const {id}= req.params
    let Rooms;
    try {
         Rooms = await RoomModel.findById(id)
    } catch (error) {
        console.log(error)
    }
    if(Rooms){
        return res.send({Rooms})
    }
    return res.send({message:"Unable to fetch individual Rooms details"})
}

// Delete Room by Id
const removeRoomById = async(req,res) => {
    const {id} = req.params
    let Rooms;
    try {
        Rooms = await RoomModel.findByIdAndRemove(id)    
    } catch (error) {
        console.log(error)
    }
    if(Rooms){
        return res.send({message:"Rooms Deleted Successfully"})
    }
    return res.send({message:"Unable to delete the Rooms"})
}



exports.AddRooms = AddRooms
exports.getAllRooms = getAllRooms
exports.getRoomById = getRoomById
exports.removeRoomById = removeRoomById