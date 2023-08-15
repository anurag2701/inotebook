const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj = {
        "name" : "anurag"
    };
    res.json(obj);
});

// This is important
module.exports = router