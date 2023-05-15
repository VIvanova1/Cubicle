const {Schema, model} = require('mongoose');

const cubeSchema = new Schema({
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
},
difficultyLevel:{
    type:Number,
    required:true,
    max:6,
    min:1,
}

});

const Cube = model('Cube',cubeSchema);
module.exports=Cube;