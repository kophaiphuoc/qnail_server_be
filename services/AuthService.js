const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Auth } = require("../models/Auth_models");

const AuthService = {
    CheckLoginService: async (auth) => {
        const authLogin = await Auth.findOne({ username: auth.username })
        const token = jwt.sign({
            data: authLogin.username,
        }, 'php', { expiresIn: '24h' });
        console.log(authLogin)
        const checkPass = await bcrypt.compare(
            auth.password,
            authLogin.password
        );
        if (checkPass) {
            console.log('login sussesfully')
            return token
        } else {
            console.log('login failed')
            return 2
        }
    }
}

module.exports = { AuthService }