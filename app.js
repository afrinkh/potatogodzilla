if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()

}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const seedDB = require('./seed');
const MongoClient = require('mongodb').MongoClient;



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000);

mongoose.connect(process.env.mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


//seedDB();


app.get('/', async(req, res) => {
    
    const products=await Product.find({});
    res.render('index',{products});
})

app.get('/:id', async(req,res) => {
    const url = await(await Product.findById(req.params.id));

    res.send(url,{ products});
})

