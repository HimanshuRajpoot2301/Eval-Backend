// const express=require('express');
// const{getReviews}=require('../controllers/bookController');
// const router=express.Router();
// router.get('./books/:bookId/reviews',getReviews);

// module.exports=router;
const express = require('express');
const { getReviews } = require('../controllers/bookController');
const router = express.Router();

router.get('/books/:bookId/reviews', getReviews);

module.exports = router;
