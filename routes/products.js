const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.get('/', async(req, res) => {
    
    const products=await Product.find({});
    res.render('index',{products});
})