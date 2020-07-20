function fieldCheck (req, res, next){
    if(req.body.name && req.body.description){
        next();
    }
    else{
        res.status(404).json(
            { error: "please supply name and description in the request" }
        )
    }
}

module.exports = fieldCheck