const express = require("express")
const router = express.Router();
const {bookedRooms,getAllBookedRooms,getRoomById,removeRoomById,updateRoom,getUserRoom,checkOutUser} = require("../controllers/BookedController");

router.post("/bookedroom",bookedRooms);
router.get("/getallbookedrooms",getAllBookedRooms);
router.get("/getbyid/:id",getRoomById);
router.delete("/removeroom/:id/:roomId",removeRoomById);
router.put("/updateroom/:id",updateRoom);
router.get("/getuserbookedroom/:id",getUserRoom);
router.put("/checkout/:id",checkOutUser);

module.exports = router;