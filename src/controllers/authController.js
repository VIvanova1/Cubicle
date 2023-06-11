const router = require('express').Router();
const authManager = require('../managers/authManager');


router.get('/login', (req, res)=>{
    res.render('loginPage')
});

router.get('/register', (req, res)=>{
    res.render('registerPage')
});


router.post('/register', async (req, res)=>{
    const {username, password, repeatPassword} = req.body;

    if(password != repeatPassword) {
        return res.redirect('/404');
    }
const existingUser = await authManager.getUserByUsername(username);

if(existingUser) {
    return res.redirect('/404');
}

 await authManager.register(username,password);
res.redirect('/login')
});

module.exports = router;