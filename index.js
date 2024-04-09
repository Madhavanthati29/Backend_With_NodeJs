const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes')
const bodyParser = require('body-parser');
const firmRouter = require('./routes/firmRoutes');
const productRouter = require('./routes/productRoutes');
const path = require('path');


const app = express()
const PORT = 4001;

dotEnv.config();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected Successfully!"))
    .catch((error) => console.log(error))

    app.use(bodyParser.json());
    app.use('/vendor', vendorRoutes);
    app.use('/firm', firmRouter);
    app.use('/product', productRouter);
    app.use('uploads', express.static('uploads'));


    app.listen(PORT, ()=> {
    console.log(`Server started and running at ${PORT}`);
});

    app.use('/home', (req, res) => {
        res.send("<h1>Welcome to SUBY");
    })