var express = require('express')
var router = express.Router();
var db = require('./db');
var md5 = require('md5')

router.use(function(req, res, next) {
    console.log("ADMIN-API Authentication")
    next();
});

//register device
router.post('/devices/registeration', function(req, res) {
    db.Find({ 'did': req.body.did }, 'devices', function(item) {
        if (item.length > 0) {
            res.json({ "status": "ERROR", "message": "Device id is already added" })
            return;
        }
    })
    var doc = {
        'did': req.body.did,
        'key': md5(req.body.key),
        'isregistered': false,
        'uid': null,
        'online': false,
        'usid': null,
        'sid': null
    }

    db.Insert(doc, 'devices')
    res.json({ "status": "SUCCESS", "message": "Device id " + req.body.did + " is added" })
})





module.exports = router;