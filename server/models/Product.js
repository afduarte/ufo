var mongoose = require('mongoose');

// Create the Variation Schema
var VariationSchema = new mongoose.Schema({ type:String, temperature:String, name:String});

// Create the Product Schema
var ProductSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type:String,
        required: true,
        unique: true
    },
    thumb:{
        type:String,
        required: true

    },
    variations:[VariationSchema]
    
});


// Export the mode schema
module.exports = ProductSchema;