const express = require('express')
const actions = require("../data/helpers/actionModel")
const checkIfValidProject = require("../middleware/checkIfValidProject")
const router = express.Router()

// Create
router.post("/:id",checkIfValidProject, (req, res)=>{
    actions.insert(req.body)
    .then(action => {
        res.status(200).json({message:"action Added"})
    })
    .catch(err =>{
        res.status(500).json(
                    { error:err.name, message:err.message }
                )
    })
})
// Read
router.get("/",(req, res)=>{
    actions.get()
        .then(actions =>{
            if(!actions){
                res.status(404).json({message:" No actions found :( "})
            }else{
                res.status(200).json(actions)
            }
            
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})
// Update
router.put('/id', (req, res) => {
    actions.update(req.params.id,req.body)
        .then( updatedAction => {
            res.statsus(200).json(updatedAction)
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})
// Delete
router.delete('/:id',(req, res) => {
    actions.remove(req.params.id)
        .then( deletedAction => {
            if (!deletedAction){
                res.status(400).json({message:"No such Action"})
            }
            else{
                res.status(200).json({message:"Action Deleted"})
            }
        })
        .catch(err =>{
            res.status(500).json(
                        { error:err.name, message:err.message }
                    )
        })
})
module.exports = router