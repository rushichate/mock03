const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    movie:{type:mongoose.Schema.Types.ObjectId,ref:"Movie"},
    rating:{type:Number,require:true},
    comment:{type:String,require:true},
    timestamp:{type:Date,default:Date.now}
},{
    versionKey:false
})

const ReviewModel = mongoose.connect("review",reviewSchema)

module.exports ={
    ReviewModel
}