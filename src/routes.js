const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController= require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const {isAuthenicated} = require('./middlewares/authMiddleware')

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', isAuthenicated, cubeController.getCreateCube);
router.post('/create',isAuthenicated, cubeController.postCreateCube)
router.get('/details/:cubeId', cubeController.getDetails)

router.post('/cubes/:cubeId/attach', cubeController.postAttachAccessory)

router.get('/create/accessory', accessoryController.getCreateAccessory)
router.get('/attach/accessory/:cubeId', accessoryController.getAttachAccessory)
router.post('/attach/accessory', accessoryController.postCreateAccessory)

router.use('/', authController)
module.exports = router;