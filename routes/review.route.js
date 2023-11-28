const express = require("express")
const { ReviewModel } = require("../models/review.model")
const reviewRouter = express.Router()


reviewRouter.get("/:movieId",async(req,res)=>{
    const {movieId} = req.params
    try{
        const review = await ReviewModel.find({movie:movieId})
        res.status(200).json(review)

    }catch(error){
        res.status(400).json({message:error})
    }
})

reviewRouter.post("/:movieId",async(req,res)=>{
    const {movieId} = req.params
    const {user,rating,comment} = req.body
    try{
         const review = new ReviewModel({user,movie:movieId,rating,comment})
         await review.save()
         res.status(201).json({message:"review added"})
    }catch(error){
        res.status(400).json({message:error})
    }
})

reviewRouter.delete("/:reviewId",async(req,res)=>{
    const {reviewId} = req.params
    try{
        await ReviewModel.findByIdAndDelete(reviewId)
        res.status(202).json({message:"Review Deleted"})

    }catch(error){
        res.status(400).json({message:error})
    }
})

reviewRouter.put("/:reviewId",async(req,res)=>{
    const {reviewId} = req.params
    const {rating,comment} = req.body
    try{
        await ReviewModel.findByIdAndUpdate(reviewId,{rating,comment})
        res.status(204).json({message:"Review Updated"})

    }catch(error){
        res.status(400).json({message:error})
    }
})


module.exports = {
    reviewRouter
}