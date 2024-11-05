// MVC model architecture is used here --> model , view, controller
let mongoose = require('mongoose');
//create a model class
letBookModel = mongoose.Schema({
    Name: String,
    Author: String,
    Published: String,
    Description: String,
    Price:Number
}
,{
    
    collection:"LibBooks"
})
module.exports = mongoose.model('Book', BookModel);