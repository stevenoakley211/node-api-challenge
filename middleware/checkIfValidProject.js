const dbProjects = require('../data/helpers/projectModel')
function checkIfValidProject (req, res, next) {
    dbProjects.get(req.body.project_id)
    .then(success=>{
    if(success){
        next();
    }
    else{
        res.status(404).json({error:"invalid project id"})
    }
    })
    .catch(err => {
         res.status(500).json({error:"server error"})
    })
}

module.exports = checkIfValidProject