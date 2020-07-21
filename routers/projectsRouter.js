const express = require('express')
const projects = require("../data/helpers/projectModel")
const fieldCheck = require("../middleware/fieldCheck")
const router = express.Router()

// Create
router.post("/",fieldCheck, (req, res)=>{
    projects.insert(req.body)
    .then(project => {
        res.status(200).json({message:"Project Added"})
    })
    .catch(err =>{
        res.status(500).json(
                    { error:err.name, message:err.message }
                )
    })
})
// Read
router.get("/",(req, res)=>{
    projects.get()
        .then(project =>{
            if(!project){
                res.status(404).json({message:" No projects found :( "})
            }else{
                res.status(200).json(project)
            }
            
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})

router.get("/:id",(req,res)=>{
    projects.get(req.params.id)
        .then(projects => {
            if(!projects){
                res.status(404).json({message:" No projects found :( "})
            }else{
                res.status(200).json(projects)
            }
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})
// Update
router.put('/:id',fieldCheck, (req, res) => {
    projects.update(req.params.id,req.body)
        .then( updatedProject => {
            res.status(200).json(updatedProject)
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})
// Delete
router.delete('/:id',(req, res) => {
    projects.remove(req.params.id)
        .then( deletedProject => {
            if (!deletedProject){
                res.status(400).json({message:"No such Project"})
            }
            else{
                res.status(200).json({message:"Project Deleted"})
            }
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})
module.exports = router