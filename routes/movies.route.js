const express = require("express")
const { MovieModel } = require("../models/movie.model")
const moviesRouter = express.Router()


moviesRouter.get("/",async(req,res)=>{
    try{
        const movies = await MovieModel.find()
        res.status(200).json(movies)

    }catch(error){
        res.status(400).json({message:error})
    }
})
moviesRouter.get("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const movie = await MovieModel.findById(id)
        res.status(200).json(movie)

    }catch(error){
        res.status(400).json({message:error})
    }
})
 

module.exports ={
    moviesRouter
}