const express = require('express');
const router = express.Router();
const mongoDB = require('../db');

router.post('/foodData', async (req,res)=>{
    try {
        await mongoDB();
        res.send([global.food_items,global.food_category]);
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;