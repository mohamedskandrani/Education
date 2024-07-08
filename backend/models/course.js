// import mongoose module
const mongoose=require("mongoose");
//create Course schema 
const courseSchema=mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    duration:Number,
    description:String,
    ageOfKids:String,
    totalSeats:Number,
    
 
});
//affect name to matchSchema
const course=mongoose.model("course",courseSchema);
//make model exportable
module.exports=course;