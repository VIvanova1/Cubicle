const Accessory = require('../models/Accessory');

exports.getCreateAccessory = (req, res)=>{
    res.render('createAccessory');
}