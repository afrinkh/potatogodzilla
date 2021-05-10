const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [

    {
        title: "title 1",
        img: "https://images.unsplash.com/photo-1600177210053-80bf7d415f58?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzQ5MzYwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        url: "https://google.com"
    },
    {
        title: "title 2",
        img: "https://images.unsplash.com/photo-1600177210053-80bf7d415f58?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzQ5MzYwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        url: "https://google.com"
    },
    {
        title : "title 3",
        img: "https://images.unsplash.com/photo-1600177210053-80bf7d415f58?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzQ5MzYwN3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        url: "https://google.com"
    }
]

function seed() {
    Product.insertMany(products)
    .then(() => {
        console.log("DB success");
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = seed;