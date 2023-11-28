const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    watchedMovies:[{type:mongoose.Schema.Types.ObjectId,ref:"Movie"}],
    reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema)

module.exports ={
    UserModel
}