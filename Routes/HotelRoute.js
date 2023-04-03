const express = require("express")
const router = express.Router();
const {AddHotel,getAllHotels,removeHotel,getHotelById,EditHotel,FindByType} = require("../controllers/hotelControllers")

router.post("/addhotel",AddHotel);
router.get("/gethotels",getAllHotels);
router.get("/gethotel/:id",getHotelById);
router.delete("/removehotel/:id",removeHotel);
router.put("/updatehotel/:id",EditHotel);
router.get("/findbycity/:city",FindByType);

module.exports = router;