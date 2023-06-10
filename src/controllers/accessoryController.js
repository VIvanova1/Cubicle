const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getCreateAccessory = (req, res)=>{
    res.render('createAccessory');
}

exports.getAttachAccessory = async (req, res)=>{
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({_id: {$nin: cube.accessories}}).lean();
    res.render('attachAccessory', {cube,accessories })
}

exports.postCreateAccessory = async (req, res) => {
    const {name,description,imageUrl} = req.body;
    let accessory = new Accessory({name,description,imageUrl});
    await accessory.save(accessory);
    res.redirect('/');
}