const { JWT_SECRET } = require("../keys");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = (req, res, next) =>{
    const {authorization} = req.headers;
    if(!authorization){
        // status 401 means UNAUTHORIZED
        return res.status(401).json({error: "YOU MUST BE LOGGED IN!!!!!!!!"});
    }else{
        const token = authorization.replace("Bearer ", "");
        jwt.verify(token, JWT_SECRET, (err, payload) =>{
            if(err){
                return res.status(401).json({error: err});
            }else{
                const {_id} = payload;
                User.findById(_id).then(userdata=>{
                    req.user = userdata;
                    next();
                })

            }
            

        });
    }
}