// const{DataTypes}=require('sequelize');
// const sequelize=require('../config/database');

// const Customer=sequelize.define('Customer',{
//     id:{
//         type:DataTypes.INTEGER,
//         primaryKey:true,
//        autoIncrement:true

//     },
//     name:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     email:{
//         type:DataTypes.STRING,
//         unique:true,
//         allowNull:false
//     },
//     password:{
//         type:DataTypes.STRING,
//         allowNull:false
//     }

// });
// module.exports=Customer;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Customer;
