const mongoose = require('mongoose'); 

const ProfileSchema = mongoose.Schema({

    FirstName: {type:String},
    LastName: {type:String},
    Email: {type:String},
    Mobile: {type:String},
    Country: {type:String},
    UserName: {type:String},
    Password: {type:String},

},{versionKey:false});

const ProfileModel = mongoose.model('profile',ProfileSchema);
module.exports = ProfileModel;