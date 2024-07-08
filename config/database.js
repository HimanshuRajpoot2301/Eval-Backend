// const{Sequelize}=require ('sequelize');
// const dotenv=require('dotenv');
// dotenv.config();
// const sequelize = new Sequelize(process.env.SQL_DB, process.env.SQL_USER, process.env.SQL_PASSWORD, {
//     host: process.env.SQL_HOST,
//     dialect: process.env.SQL_DIALECT,
//     port: 3306,
//   });

// module.exports=sequelize;
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.SQL_DB, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: process.env.SQL_DIALECT,
    port: process.env.SQL_PORT || 3306
});

module.exports = sequelize;
