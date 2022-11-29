const { query } = require('express');
const sql=require('./connection');


var User= function(User) {
  this.user_name=User.user_name;
    this.user_email=User.user_email;
    this.user_password=User.user_password;
    this.reenter_password=User.reenter_password;
};



User.sign = (req,newlogin,res) => {

  var user_email = req.user_email;
  var user_password = req.user_password;
  query=`SELECT * FROM register WHERE user_email = ${user_email}`;
  sql.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("login: ", { id: res.insertId, ...newlogin });
        result(null, { id: res.insertId, ...newlogin });
      });
  };

      
User.create = (newuser, result) => {
    sql.query("INSERT INTO register SET ?", newuser, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          console.log("create the new user: ", { id: res.insertId, ...newuser });
          result(null, { id: res.insertId, ...newuser });
        });
      };
     


module.exports=User;

