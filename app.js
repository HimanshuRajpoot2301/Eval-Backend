// const express=require('express');
// const bodyParser=require('body-parser');
// const sequelize=require('./config/database');
// const connectDB=require('./config/mongoose');
// const customerRoutes=require('./routes/customerRoutes');
// const bookRoutes=require('./routes/bookRoutes');
// const swaggerUi=require('swagger-ui-express');
// const swaggerDoc=require('./utils/swagger');
// const app=express();
// const PORT=process.env.PORT || 9000
// app.use(bodyParser.json());

// sequelize.authenticate().then(()=>
// console.log("SQL DB is connected")).catch(err=>console.log(err));
// connectDB();

// app.use('/api',customerRoutes)
// app.use('/api',bookRoutes);

// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));


// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// })
    
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const connectDB = require('./config/mongoose');
const customerRoutes = require('./routes/customerRoutes');
const bookRoutes = require('./routes/bookRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./utils/swagger');
const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());

sequelize.authenticate().then(() => {
    console.log("SQL DB is connected");
}).catch(err => console.log(err));

connectDB();

app.use('/api', customerRoutes);
app.use('/api', bookRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

