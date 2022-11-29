const connection = require('../model/connection');
const Job = require('../model/job');


//get method read a file
exports.showjobs = ((req, res) => {
    const jobname=req.query.jobname;
   
    Job.getAll(jobname, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Jobs."
          });
        else res.send(data);
      });
})


//post method create file
exports.addJob = ((req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
        const job = new Job({
        jobname: req.body.jobname,
        vacancy: req.body.vacancy,
        jobrole: req.body.jobrole || false
      });
    
    
      Job.create(job, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Jobs."
              });
            else res.send(data);
          });
})


//patch method update the file
exports.updateJob = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
Job.updateById(
      req.params.id,
      new Job(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Job with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Job with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

//delete method
exports.deleteJob = (req, res) => {
  Job.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Job with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Job with id " + req.params.id
        });
      }
    } else res.send({ message: `Job was deleted successfully!` });
  });
};






