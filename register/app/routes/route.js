module.exports = app => {
    const user = require("../controller/main");
    const main = require("../controller/user");

    const connection=require("../model/connection");
  
    // var router = express.Router();
  
    // Create a new Tutorial
    app.post('/Jobapply',user.addJob);
 
    app.get('/Jobs',user.showjobs);

    app.patch('/Job/update/:id',user.updateJob);

    app.delete('/Job/delete/:id',user.deleteJob);

    app.post('/Register',main.newuser);

    app.post('/login',main.login);


}