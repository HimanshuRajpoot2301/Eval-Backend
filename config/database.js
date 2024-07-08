const{Sequelize}=require ('sequelize');
const dotenv=require('dotenv');
dotenv.config();
const sequelize=new Sequelize(
    {
        
        dialect:process.env.SQL_DIALECT,
        host:process.env.SQL_HOST,
        username:process.env.SQL_USER,
        password:process.env.SQL_PASSWORD,
        database:process.env.SQL_DB
    }
);

module.exports=sequelize;