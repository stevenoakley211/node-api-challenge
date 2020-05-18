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

})

router.put('/',(req, res)=>{

})

router.delete('/',(req, res)=>{

})

module.exports = router