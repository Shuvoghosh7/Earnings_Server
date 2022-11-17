const mongoose = require("mongoose");
const validator = require('validator');


const recordSchema = mongoose.Schema({
    Name:{
        type:String,
        trim:true,
        require:true,
        maxLength:100,
        lowercase:true
    },
    Email:{
        type:String,
        lowercase:true,
        validator:[validator.isEmail,"Plese provide a valid Email"]
    },
    ReferredUser:{
        type:String,
        lowercase:true,
    },
    isPaymentMade:Boolean,
    TotalEarnings:{
        type:Number,
    }   
},{
    timestamps: true
})


const User = mongoose.model('User', recordSchema);

module.exports=User;