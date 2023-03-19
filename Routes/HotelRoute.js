const express = require("express")
const router = express.Router();
const {AddHotel,getAllHotels,removeHotel,getHotelById} = require("../controllers/hotelControllers")

router.post("/addhotel",AddHotel);
router.get("/gethotels",getAllHotels);
router.get("/gethotel/:id",getHotelById);
router.post("/removehotel/:id",removeHotel);

module.exports = router;