const hotelModel = require("../Models/hotelModel");
const HotelModal = require("../Models/hotelModel");


// Add Hotel to the database
const AddHotel = async(req,res) => {
    const {name,type,city,address,distance,title,desc,isFeatured,price,photos} = req.body
  const Hotel = new HotelModal({
    name,
    type,
    city,
    address,
    distance,
    title,
    desc,
    isFeatured,
    price,
    photos,
  });
  try {
    await Hotel.save()
  } catch (err) {
    console.log(err)
    
  }
  res.send({Hotel})
  
}

// getAll the the hotel
const getAllHotels = async(req,res) => {
    let hotels;
    try {
         hotels = await HotelModal.find({}).populate("rooms")
    } catch (error) {
        console.log(error)
    }
    if(hotels){
        return res.send({hotels})
    }
    return res.send({message:"Unable to fetch hotels details"})
}

// get hotel by ID
const getHotelById = async(req,res) => {
    const {id}= req.params
    let hotels;
    try {
         hotels = await HotelModal.findById(id).populate("rooms")
    } catch (error) {
        console.log(error)
    }
    if(hotels){
        return res.send({hotels})
    }
    return res.send({message:"Unable to fetch individual hotels details"})
}

// Delete Hotel by Id
const removeHotel = async(req,res) => {
    const {id} = req.params
    let hotel;
    try {
        hotel = await HotelModal.findByIdAndRemove(id).exec()    
    } catch (error) {
        console.log(error)
    }
    if(hotel){
        return res.send({message:"Hotel Deleted Successfully",hotel})
    }
    return res.send({message:"Unable to delete the hotel"})
}

// Edit Hotel
const EditHotel = async(req,res) => {
    const {id} = req.params;
    let hotel;
    try {
        hotel = await hotelModel.findByIdAndUpdate(id,{
            $set:req.body
        },{
            new:true
        })
    } catch (error) {
        console.log(error)
    }
    res.send({msg:"Hotel Updated Successfully",hotel})
}

// Find By Type
const FindByType = async(req,res) => {
const {city} = req.params;
let data;
try {
    data = await hotelModel.find({city:city})
} catch (error) {
    console.log(error) 
}
res.send({data})
}

exports.AddHotel = AddHotel
exports.removeHotel = removeHotel
exports.getAllHotels = getAllHotels
exports.getHotelById = getHotelById
exports.EditHotel = EditHotel
exports.FindByType = FindByType