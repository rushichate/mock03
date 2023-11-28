const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    title:{type:String,required:true},
    genre:[{type:String,required:true}],
    releseYear:{type:Number,required:true},
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
},{
    versionKey:false
})

const MovieModel = mongoose.connect("movie",movieSchema)

module.exports ={
   MovieModel
}