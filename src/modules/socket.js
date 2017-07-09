var db = require('./db')
module.exports = function(sio) {
    sio.on('connection', function(socket) {
        var deviceid;
        var socketid = socket.id;
        var usid;
        var uid;
        console.log("[Socket] Client Connected " + socket.id);

        socket.on('disconnect', function() {
            if (deviceid != null || deviceid != undefined) {
                console.log("[Socket] Client Disconnected");
                console.log("[Socket] deviceid :" + deviceid + " Disconnected")

                db.Delete({
                    'sid': socketid,
                    'did': deviceid
                }, 'online')

                db.Update({ 'did': deviceid }, { 'online': false }, 'devices');
            } else {
                db.Update({ 'usid': usid }, { 'usid': null }, 'devices');
            }
        })

        socket.on('JOIN_USER', function(data) {
            console.log(data)
            uid = data.uid;
            usid = socketid;
            db.Update({ 'uid': uid }, { 'usid': usid }, 'devices')
        })

        socket.on('START_STREAM', function(data) {
            console.log("[START_STREAM] ");
            var did = data.did;
            db.Find({ 'did': did }, 'devices', function(items) {
                var sid = items[0].sid;
                var data = {
                    'usid': usid
                }
                console.log(sid)
                sio.to(sid).emit('ENABLE_STREAM_SENSOR', data);
            })
        })

        socket.on('REQ_CONFIG', function(data) {
            console.log("[REQ_CONFIG] ");
            var did = data.did;
            db.Find({ 'did': did }, 'devices', function(items) {
                var sid = items[0].sid;
                var data = {
                    'usid': usid
                }
                sio.to(sid).emit('REQ_CONFIG', data);
            })
        });

        socket.on('STOP_STREAM', function(data) {
            sio.to(sid).emit('DISABLE_STREAM_SENSOR');
        })

        socket.on('STREAM_SENSOR', function(data) {
            sio.to(data.usid).emit('SENSOR_DATA', data)
        })

        socket.on('JOIN_DEVICE', function(data) {
            deviceid = data.did;
            socket.join(deviceid);
            db.Find({ 'did': deviceid }, 'devices', function(item) {
                if (item.length > 0) {
                    var doc = {
                        'did': deviceid,
                        'sid': socketid,
                        'uid': item[0].uid
                    }

                } else {
                    var doc = {
                        'did': deviceid,
                        'sid': socketid,
                        'uid': null
                    }
                }
                db.Insert(doc, 'online')
            })
            db.Update({ 'did': deviceid }, { 'online': true, 'sid': socketid }, 'devices');
        })

        // socket.emit('SET_POINT', { 'usid': usid, 'config': config.setpoint });
        // socket.emit('TIMER', { 'usid': usid, 'config': config.timer })
        // socket.emit('MANUAL', { 'usid': usid, 'config': config.manualRelay });
        // socket.emit('MODE', { 'usid': usid, 'config': config.mode });
        // socket.emit('SETMODE', { 'usid': usid, 'config': config.setmode });
        // socket.emit('DETECTING', { 'usid': usid, 'config': config.detecting });

        socket.on('SET_POINT', function(data) {
            console.log('SET_POINT')
            sio.to(data.usid).emit('SET_POINT', data.config)
        })

        socket.on('TIMER', function(data) {
            console.log('TIMER')
            sio.to(data.usid).emit('TIMER', data.config)
        })

        socket.on('MANUAL', function(data) {
            console.log('MANUAL')
            sio.to(data.usid).emit('MANUAL', data.config)
        })

        socket.on('MODE', function(data) {
            console.log('MODE')
            sio.to(data.usid).emit('MODE', data.config)
        })

        socket.on('SETMODE', function(data) {
            console.log('SETMODE')
            sio.to(data.usid).emit('SETMODE', data.config)
        })

        socket.on('DETECTING', function(data) {
            console.log('DETECTING')
            sio.to(data.usid).emit('DETECTING', data.config)
        })

        ///////
        socket.on('REQ_CHECK_DATE', function(data) {
            console.log("[REQ_CHECK_DATE] ");
            console.log(data)
            var did = data.did;
            var my = data.data;
            db.Find({ 'did': did }, 'devices', function(items) {
                var sid = items[0].sid;
                var data = {
                    'usid': usid,
                    'data': my
                }
                sio.to(sid).emit('REQ_CHECK_DATE', data);
            })
        })

        socket.on('REP_CHECK_DATE', function(data) {
            console.log("[REP_CHECK_DATE] ");
            sio.to(data.usid).emit('REP_CHECK_DATE', data.data)
        })

        socket.on('REQ_LOGGER_DATE', function(data) {
            console.log('[REQ_LOGGER_DATE]')
            console.log(data)
            var did = data.did;
            var filename = data.data;
            db.Find({ 'did': did }, 'devices', function(items) {
                var sid = items[0].sid;
                var data = {
                    'usid': usid,
                    'data': filename
                }
                sio.to(sid).emit('REQ_LOGGER_DATE', data);
            })
        })

        socket.on('REP_LOGGER_DATE', function(data) {
            console.log("[REP_LOGGER_DATE] ", data.usid);

            sio.to(data.usid).emit('REP_LOGGER_DATE', data.data)
        })

    });
}