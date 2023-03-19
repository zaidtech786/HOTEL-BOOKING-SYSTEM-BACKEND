const mongoose = require("mongoose");
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

// User Signup
const userRegistration = async (req,res) => {
const {name,userName,password,cPassword,city,phone,email} = req.body;
let existingUser;
let hashPassword = bcrypt.hashSync(password,10)
const newUser = new User({
    name,
    userName,
    password:hashPassword,
    cPassword:hashPassword,
    city,
    phone,
    email
});
try {
    existingUser = await User.findOne({userName});
} catch (error) {
    console.log(error)
}
if(existingUser){
    return res.send("User Already registered")
}

try{
    await newUser.save();
}
catch(err){
    console.log(err)
}
res.send({msg:"Signip successfully",newUser})
}

// login user
const userLogin = async(req,res) => {
    const {userName,password} = req.body;
    let user;
    try{
      user = await User.findOne({userName});
    }
    catch(err){
        console.log(err)
    }
    if(user){
        if(bcrypt.compareSync(password,user.password)){
            res.send({message:"Login Successfully",user})
        }
        else{
            res.send({error:"Password is not correct"})
        }
    }
    else{
        return res.send({error:"user not found"})
    }
}

// get all the users
const getAllUsers = async(req,res) => {
    let users;
    try {
         users = await User.find({})
    } catch (error) {
        console.log(error)
    }
    if(users){
        return res.send({users})
    }
    return res.send({message:"Unable to fetch users details"})
}

// Getting Individual user
const getUserById = async(req,res) => {
    const {id}= req.params
    let user;
    try {
         user = await User.findById(id)
    } catch (error) {
        console.log(error)
    }
    if(user){
        return res.send({user})
    }
    return res.send({message:"Unable to fetch individual user details"})
}

// Remove USer
const removeUser = async(req,res) => {
    const {id} = req.params
    let user;
    try {
        user = await User.findByIdAndRemove(id)    
    } catch (error) {
        console.log(error)
    }
    if(user){
        return res.send({message:"user Deleted Successfully",user})
    }
    return res.send({message:"Unable to delete the user"})
}

exports.userRegistration = userRegistration
exports.userLogin = userLogin
exports.getAllUsers = getAllUsers
exports.getUserById = getUserById
exports.removeUser = removeUser