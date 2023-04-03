const express = require("express")
const router = express.Router();
const {AddRooms,getAllRooms,getRoomById,removeRoomById,updateRoom} = require("../controllers/RoomController")

router.post("/addrooms/:id",AddRooms);
router.get("/getrooms",getAllRooms);
router.get("/getroombyid/:id",getRoomById);
router.delete("/removerooms/:id",removeRoomById);
router.put("/updateroom/:id",updateRoom);

module.exports = router