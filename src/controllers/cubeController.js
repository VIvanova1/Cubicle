const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {
    const {name,description,imageUrl,difficultyLevel} = req.body;
    let cube = new Cube({name,description,imageUrl,difficultyLevel});
    await cube.save(cube);
    res.redirect('/');
}

exports.getDetails = async (req, res)=>{
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();
    console.log(cube);
    if(!cube){
        return res.redirect('/404');
    }
    res.render('details', {cube})
}

exports.postAttachAccessory = async (req,res) =>{
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();
    res.redirect(`/details/${cube._id}`)

}