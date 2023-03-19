const express = require("express")
const router = express.Router();
const {userRegistration,userLogin,getAllUsers,getUserById,removeUser} = require("../controllers/userController")
 
router.post("/usersignup",userRegistration)
router.post("/userlogin",userLogin)
router.get("/getusers",getAllUsers)
router.get("/getuser/:id",getUserById)
router.delete("/removeuser/:id",removeUser)
module.exports = router