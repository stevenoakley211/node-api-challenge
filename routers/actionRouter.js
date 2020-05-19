const express = require('express')
const db = require("../data/helpers/actionModel")
const checkValidProject = require("../middleware/checkIfValidProject")
const router = express.Router()

router.get('/', (req, res)=>{
    db.get()
    .then(actions =>{
        if(actions){
            res.status(200).json(actions)
        }
        else{
            res.status(404).json(
                        {message: "action was not found."}
                    )
        }
    })
    .catch(err=>{
        res.status(500).json(
                    { error:"server error" }
                )
    })
})

router.post('/:id',checkValidProject, (req, res)=>{
    const id = req.params.id
    const body = req.body
    db.insert(body)
    .then(actions =>{
        if (actions) {
                    res.status(200).json(actions)
                }
                else {
                    res.status(404).json(
                        { message:"something is missing from the request" }
                    )
                }
    })
    .catch(err=>{
        res.status(500).json({error:"server error"})
    })
})

router.put('/:id',(req, res)=>{
    const id = req.params.id
    const body = req.body

    db.update(id, body)
    .then(actions=>{
        if(actions){
            res.status(200).json(actions)
        }
        else {
                    res.status(404).json(
                        { message:"something is missing from the request" }
                    )
                }
    })
    .catch(err=>{
        res.status(500).json(
                    { error:"server error" }
                )
    })
})

router.delete('/:id',(req, res)=>{
    const id = req.params.id
    db.remove(id)
    .then(actions=>{
        if (actions) {
                    res.status(200).json(actions)
                }
                else {
                    res.status(404).json(
                        { message:"id not found." }
                    )
                }
    })
    .catch(err=>{
        res.status(500).json(
                    { error:"server error" }
                )
    })
})

module.exports = router