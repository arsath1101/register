

const sql=require('./connection');

const Job = function(Job) {
    this.jobname=Job.jobname;
    this.vacancy=Job.vacancy;
    this.jobrole=Job.jobrole;
};

Job.getAll = (jobname, result) => {
    let query = "SELECT * FROM apply";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("tutorials: ", res);
      result(null, res);
    });
  };

  //create Jobs


  
Job.create = (newjob, result) => {
    sql.query("INSERT INTO apply SET ?", newjob, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Job: ", { id: res.insertId, ...newjob });
      result(null, { id: res.insertId, ...newjob });
    });
  };

//updated Jobs

Job.updateById = (id, Job, result) => {
    sql.query(
      "UPDATE apply SET jobname = ?, vacancy = ?, jobrole = ? WHERE id= ?",
      [Job.jobname, Job.vacancy, Job.jobrole, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Job with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated Job: ", { id: id, ...Job });
        result(null, { id: id, ...Job });
      }
    );
  };
  
//delete Jobs

Job.remove = (id, result) => {
    sql.query("DELETE FROM apply WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("delete Job with id: ", id);
      result(null, res);
    });
  };
  



module.exports=Job;