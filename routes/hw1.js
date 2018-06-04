var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:string', function(req, res, next) {
     (req.params).length = ((req.params).string).length;
     res.json(req.params);
});

router.post('/', function(req, res, next) {
    var string = req.body.string;
    var length = string.length;
    res.send('{"string":' + '"' + string + '", "length":' + length + '}');
})

module.exports = router;