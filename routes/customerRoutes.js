const express=require('express');
const{getOrders}=require('../controllers/customerController');
const router=express.Router();
router.get('./customers/:customerId/orders',getOrders);
module.exports=router