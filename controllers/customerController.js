// const Customer=require('../models/customer');
// const Order=require('../models/order');

// const getOrders=async(req,res)=>{
// try {
//     const customerId=req.params.customerId;
//     const orders=await Order.findAll({where:{customerId},include:{Customer}});
//     res.status(200).json(orders);
// } catch (error) {
//     res.status(500).json({error:error})
// }
// }
// module.exports={getOrders};
const Customer = require('../models/customer');
const Order = require('../models/order');

const getOrders = async (req, res) => {
    try {
        const customerId = req.params.customerId;
        const orders = await Order.findAll({
            where: { customerId },
            include: Customer
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getOrders };
