const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type: Number

    }
});

const Product = mongoose.model('products', productSchema)
module.exports = Product;