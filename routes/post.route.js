let mongoose = require('mongoose');
let express = require('express');
router = express.Router();

let postSchema = require("../models/posts")

router.route('/create-post').post(async (req,res,next)=>{
    await postSchema
    .create(req.body)
    .then((result)=>{
        res.json({
            data:result,
            message:"data is a go",
            status:200,
        })
        console.log(req.body)
    })
    .catch((err)=>{
        return next(err);
    })
});
router.route('/get-post').get(async (req,res,next)=>{
    await postSchema
    .find()
    .then((result)=>{
        res.json({
            data:result,
            message:"It's all there",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err)
    })
});
router.route('/get-post/:id').get(async (req,res,next)=>{
    await postSchema
    .findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"Got it",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err)
    });
});

module.exports = router;