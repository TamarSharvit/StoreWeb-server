const express = require('express');
const app = express();

const categoryRoutes=require('./routes/CategoryRoutes');
const orderRoutes=require('./routes/OrderRoutes');
const productRoutes=require('./routes/ProductRoutes');
const userRoutes=require('./routes/UserRoutes')

const mongoosedb = require('./db');
//db.connectToMongo();//connection to mongo
mongoosedb._connect();

//use static files
app.use(express.static('static'));

app.use(express.json());

//routes
app.use('/user', userRoutes);
app.use('/orders', orderRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);

//page not found
app.use((req, res)=>{
    res.status(404).sendFile(path.join(_dirname, '/eror.html'));
})

//middelwares for error
app.use((err, req, res, next)=>{
    console.log(err);
  res.status(404).sendFile(path.join(_dirname, '/eror.html'));
})

app.listen(3001, ()=>{
    console.log("server is up!!")
})

module.exports = app;
