var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
    res.send({
        success: true,
        data: {
            username: "Pramod Kumar"
        }
    });
});

module.exports = router;
