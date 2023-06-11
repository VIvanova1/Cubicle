const Cube = require('../models/Cube');
const cubeManager = require('../managers/cubeManager');
const cubeUtils = require('../utils/cubeUtils');


exports.getCreateCube = (req, res) => {
    res.render('create');
}

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save(cube);
    res.redirect('/');
}

exports.getDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();
    console.log(cube);
    if (!cube) {
        return res.redirect('/404');
    }
    res.render('details', { cube });
}

exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();
    res.redirect(`/details/${cube._id}`);

}

exports.getEditCube = async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);

    res.render('editCubePage', { cube, difficultyLevels });
};

exports.getDeleteCube = async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    res.render('deleteCubePage', { cube });
};