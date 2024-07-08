const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Customer=require('./customer');
const Order=sequelize.define('Order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    customerId:{
        type:DataTypes.INTEGER,
        references:{
            model:Customer,
            key:'id'
        },
        allowNull:false
    },
    orderDate:{
        type:DataTypes.DATE,
        allowNull:false
    }
});
module.exports=Order;