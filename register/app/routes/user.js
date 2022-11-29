module.exports = app => {
    const user = require("../controller/main");
    const main = require("../controller/user")

    app.post('/Register',main.newuser);

    app.post('/login',main.login);


}