const Book=require('../models/book');
const Review=require('../models/review');
const Customer=require('../models/customer');
const review = require('../models/review');
const getReviews=async(req,res)=>{
    try {
        const bookId=req.params.bookId;
        const reviews=await Review.find({bookId}).populate('customerId','name email');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({error:error})
    }
}
module.exports={getReviews};