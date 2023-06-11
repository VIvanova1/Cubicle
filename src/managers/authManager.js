const User = require('../models/User');

exports.getUserByUsername = (username) => {
    return User.findOne({ username });
}

exports.register = (username, password) => {
    return User.create({ username, password });
};

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    if (!user || !user.validatePassword(password)) {
        throw 'Invalid username or password!';
    }


}