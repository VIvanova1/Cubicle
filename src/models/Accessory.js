const {Schema, model} = require('mongoose');

const accessorySchema = new Schema({
name:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
    maxLenght:50,
},
imageUrl:{
    type:String,
    reqired: true,
}

});

const Accessory = model('Accessory',accessorySchema);
module.exports=Accessory;