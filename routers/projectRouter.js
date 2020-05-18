const express = require('express')
const db = require("../data/helpers/projectModel")
const router = express.Router()

router.get('/', (req, res)=>{
    db.get()
    .then(projects =>{
        if(projects){
            res.status(200).json(projects)
        }
        else{
            res.status(404).json(
                        {message: "action was not found."}
                    )
        }
    })
})

router.get('/:id',(req, res)=>{
    const id = req.params.id;
     db.get(id)
    .then(
            projects =>{
                if (projects) {
                    res.status(200).json(projects)
                }else {
                    res.status(404).json(
                        { message: "project not found." }
                    )
                }
                
            }
        
        )
        .catch(err=>{
            res.status(500).json(
                    { error:"server error" }
                )
        })
})

router.post('/', (req, res)=>{
    if(req.body.name & req.body.description){
        
        db.insert(req.body)
            .then(project=>{
              res.status(200).json({message:"successfully added project"})  
            })
            .catch(err=>{
                res.status(500).json(
                        { error:"server error" }
                    )
            })
        
    }
    else{res.status(404).json(
                { error:"please supply name and description in the request" }
            )}

})

router.put('/',(req, res)=>{
    const id = req.params.id
    const body = req.body
    if(req.body.name & req.body.description){
        db.update(id, body)
            .then(project=>{
                res.status(200).json(project)
            })
            .catch(err=>{
                res.status(500).json(
                    { error:"server error" }
                )
            })
        }
        else{
            res.status(404).json(
                { error: "please supply name and description in the request" }
            )
        }
        
})

router.delete('/',(req, res)=>{
    const id = req.params.id;
    db.delete(id)
    .then(project=>{
        if (project){
            res.status(200).json({message:"project deleted "})
        }
        else{
            res.status(200).json({message:"project deleted "})
        }
        
    })
    .catch(err=>{
        res.status(500).json(
                    { error:"server error" }
                )
    })
})

module.exports = router