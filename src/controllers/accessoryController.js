const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getCreateAccessory = (req, res)=>{
    res.render('createAccessory');
}

exports.getAttachAccessory = async (req, res)=>{
    const cube = await Cube.findById(req.params.cubeId).lean();
    if(!cube){
        return res.redirect('/404');
    }
    res.render('attachAccessory', {cube});
}

exports.postCreateAccessory = async (req, res) => {
    const {name,description,imageUrl} = req.body;
    let accessory = new Accessory({name,description,imageUrl});
    await accessory.save(accessory);
    res.redirect('/');
}