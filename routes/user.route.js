let mongoose = require('mongoose');
let express = require('express');
router = express.Router();
const {Hash,unHash} = require('../bycrp')

let userSchema = require("../models/user")

router.route("/create-user").post(async (req,res,next)=>{
    await userSchema
    .create({...req.body,password:await Hash(req.body.password)})
    .then((result)=>{
        res.json({
            data:result,
            message:"Data recieved correctly",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err)
    })

})
router.post("/user-login", async (req, res,next)=>{
    console.log(req.body)
    try{
    await userSchema
    .findOne({ 
        username: req.body.username,
    })
    .then(async(result)=>{
        var valid = await unHash(req.body.password,result.password);
        

        if(!valid){
            throw new Error('dont work, lid wont fit')
        }

        res.json({result})

    })
}catch(err){
    console.log(err)
    res.json({})
}
    ///// user.passord ==== ,userSchema.password
})

module.exports = router;