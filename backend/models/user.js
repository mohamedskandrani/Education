// import mongoose module
const mongoose=require("mongoose");
//create match schema 
const usersSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number, 
    address:String,
    email:String, 
    pwd:String,
    confirmPassword:String, 
    role:String,     
});
//affect name to matchSchema
const users=mongoose.model("users",usersSchema);
//make model exportable
module.exports=users;