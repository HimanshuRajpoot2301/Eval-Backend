const mongoose=require('mongoose')
const reviewSchema=new mongoose.Schema({
   bookId:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},
   rating:{type:Number,required:true},
   comment:{type:String,required:true}
})

module.exports=mongoose.model('Review',reviewSchema);