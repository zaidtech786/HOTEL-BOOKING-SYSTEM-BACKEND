const bookRoomModel = require("../Models/BookedRoomModel")
const RoomModel = require("../Models/Rooms")


// Booked Room
const bookedRooms = async(req,res) => {
    const bRooms = new bookRoomModel(req.body);
    let updateRoom;
    try{
        updateRoom = await RoomModel.findByIdAndUpdate(bRooms.room,{
        isBooked:true
       },{
        new:true
       })
      await bRooms.save()
    }catch(err){
        console.log(err)
    }
    res.send({bRooms,updateRoom})
}


// get All the the Booked Rooms
const getAllBookedRooms = async(req,res) => {
    let rooms;
    try {
         rooms = await bookRoomModel.find({}).populate("user hotel room")
    } catch (error) {
        console.log(error)
    }
    if(rooms){
        return res.send({rooms})
    }
    return res.send({message:"Unable to fetch rooms details"})
}

// get booked Rooms by ID
const getRoomById = async(req,res) => {
    const {id}= req.params
    let Rooms;
    try {
         Rooms = await bookRoomModel.findById(id)
    } catch (error) {
        console.log(error)
    }
    if(Rooms){
        return res.send({Rooms})
    }
    return res.send({message:"Unable to fetch individual Rooms details"})
}

// cancel booked Rooms by Id
const removeRoomById = async (req, res) => {
    const { id,roomId } = req.params;
    let updatedRoom;

    try {
        // First, update the room to mark it as not booked
        updatedRoom = await RoomModel.findByIdAndUpdate(roomId, { isBooked: false }, { new: true }).exec();
        
        // Then, if the room was successfully updated, delete it
        if (updatedRoom) {
            await bookRoomModel.findByIdAndDelete(id).exec();
            return res.send({ message: "Room deleted successfully" });
        } else {
            return res.send({ message: "Room not found or unable to update" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}


// Update booked Rooms By Id
const updateRoom = async(req,res) => {
    const {id} = req.params
    let Rooms;
    try {
        Rooms = await bookRoomModel.findByIdAndUpdate(id,{
            $set:req.body
        },{
            new:true
        })    
    } catch (error) {
        console.log(error)
    }
    res.send({msg:"Room Updated Successfully",Rooms})
}

// Get Rooms Booked By user
const getUserRoom = async(req,res) => {
    let {id} = req.params;
    let userRoom
    try {
        
         userRoom = await bookRoomModel.find({user:id}).populate("user hotel room")
    } catch (error) {
        console.log(error)
        
    }
    if(userRoom){
        return res.send({userRoom})
    }
    return res.send({msg:"unable to fetch user rooms "})
}

// CheckOut User
const checkOutUser = async(req,res) => {
    // console.log(roomId)
    let updateRoom;
    try{
       updateRoom = await RoomModel.findByIdAndUpdate(req.params.roomId,{
        isBooked:false
       },{
        new:true
       })
    }catch(err){
        console.log(err)
    }
    res.send({updateRoom})

}


 exports.bookedRooms = bookedRooms
 exports.getAllBookedRooms = getAllBookedRooms
 exports.getRoomById = getRoomById
 exports.removeRoomById = removeRoomById
 exports.updateRoom = updateRoom
 exports.getUserRoom = getUserRoom
 exports.checkOutUser = checkOutUser