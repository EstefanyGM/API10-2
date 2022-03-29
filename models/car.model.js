const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: String, require: true},
    type: {type: String, require: true}
});

module.exports = mongoose.model('car', carSchema);
