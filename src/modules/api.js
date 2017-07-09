var express = require('express')
var router = express.Router()
var db = require('./db')
var Ajv = require('ajv');
var ajv = new Ajv();
var apiSchema = require('../api-schema/schema')
var md5 = require('md5')

router.use(function mid(req, res, next) {
    //authentication and authorization checking
    console.log("Authen")
    next()
});

// get online device
router.get('/devices/online', function(req, res) {

});


//userid and device binding  
router.post('/devices/binding', function(req, res) {

    if (!validate(req.body, apiSchema.device_binding)) {
        res.json({ "status": "ERROR", "message": "JSON FORMAT ERROR" })
        return;
    }

    db.Find({ 'did': req.body.did, 'key': req.body.key }, 'devices', function(i) {
        if (i.length != 0) {
            // var devicelist = [];
            // db.Find({ 'uid': req.body.uid }, 'user_device', function(item) {
            //     if (item.length != 0) {
            //         devicelist = item[0].device_list
            //         if (devicelist.indexOf(req.body.did) == -1)
            //             devicelist.push(req.body.did)
            //         console.log(devicelist)
            //         db.Update({ 'uid': req.body.uid }, { $set: { 'device_list': devicelist } }, 'user_device')
            //     } else {
            //         devicelist.push(req.body.did)
            //         db.Insert({ 'uid': req.body.uid, 'device_list': devicelist }, 'user_device')
            //     }
            // })
            db.Update({ 'did': req.body.did, 'key': req.body.key }, { 'isregistered': true, 'uid': req.body.uid }, 'devices')
            res.json({ 'status': 'SUCCESS', 'message': 'DEVICE ADDED' })
        } else {
            res.json({ 'status': 'ERROR', 'message': 'USER AND KEY PASS FAILS' })
        }
    })
});

//find device from user id that have registered
router.post('/devices/user/binding', function(req, res) {
    if (!validate(req.body, apiSchema.device_online)) {
        res.json({ "status": "ERROR", "message": "JSON FORMAT ERROR" })
        return;
    }
    db.Find({ 'uid': req.body.uid }, 'devices', function(item) {
        var data = []
        for (let i of item) {
            var d = {
                'uid': i.uid,
                'did': i.did,
                'online': i.online
            }
            data.push(d)
        }
        res.json(data)
    });
})

//find device id 
router.post('/devices/id', function(req, res) {
    db.Find({ 'did': req.body.did }, 'devices', function(item) {
        if (item.length > 0) {
            var device = [{
                'did': item[0].did,
                'isregistered': item[0].isregistered
            }]
            res.json(device)
        } else {
            res.json([])
        }
    });
})



module.exports = router;

var validate = function(json, schema) {
    var valid = ajv.validate(schema, json);
    if (!valid) console.log(ajv.errors);

    return valid;
}