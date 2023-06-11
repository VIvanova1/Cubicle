const jwt = require('../lib/jsonwebtoken');
const config = require('../config');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, config.SECRET);
            req.user = decodedToken;
            req.isAuthenicated = true;
        } catch (err) {
            res.clearCookie('auth');
            res.redirect('/404');
        }
    }

    next();
}

exports.isAuthenicated = (req, res, next) =>{
    if(!req.isAuthenicated){
        return res.redirect('/login');
    }
    next();
}