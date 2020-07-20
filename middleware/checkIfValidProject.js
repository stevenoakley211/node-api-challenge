const projects = require("../data.helpers/projectModel")

function checkIfValidProject (req, res, next)  {
    projects.get(req.body.project_id)
        .then( success => {
            if(!success){
                res.status(404).json({error:"invalid Project-id!!!"})
            }
            else{
            next();
            }
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
}

module.exports = checkIfValidProject;