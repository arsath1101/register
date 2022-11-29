const connection = require("../model/connection");
var User = require("../model/user");




exports.login = ((req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


 User.sign((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Login."
              });
            else res.send(data);
          });
})

exports.newuser=((req, res) => {
  if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
      var user = new User({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password:req.body.user_password,
      reenter_password: req.body.reenter_password || false
    });
  
  
   User.create(user, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the users."
            });
          else res.send(data);
        });
})




