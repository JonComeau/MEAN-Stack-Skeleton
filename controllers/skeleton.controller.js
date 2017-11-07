// Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const skeleton = require('../models/skeleton');


// GET HTTP method to /skeleton
router.get('/', (req,res) => {
    res.send("GET");
});

// POST HTTP method to /skeleton
router.post('/', (req,res,next) => {
    res.send("POST");
});

// DELETE HTTP method to /skeleton.
// Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
    res.send("DELETE");
})

module.exports = router;