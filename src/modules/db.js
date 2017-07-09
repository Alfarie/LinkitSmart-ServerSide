var MongoClient = require('mongodb').MongoClient;
var config = require('../config');
var assert = require('assert');
var client = MongoClient;
var url = config.database;

client.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('online').deleteMany({}, function(err, res) {})
});

module.exports.Update = function(data_condition, set, col) {
    client.connect(url, function(err, db) {
        db.collection(col).updateOne(data_condition, { $set: set }, function(err, res) {
            console.log(err)
        });
    });
}

module.exports.Insert = function(data, col) {
    client.connect(url, function(err, db) {
        db.collection(col).insertOne(data, function(err, res) {
            assert.equal(err, null);
        });
    });
}
module.exports.Find = function(data, col, cb) {
    client.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection(col).find(data).limit(10).toArray(function(err, item) {
            cb(item);
        });
    });
}

module.exports.Delete = function(data, col) {
    client.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection(col).deleteOne(data, function(err, res) {
            assert.equal(err, null);
            assert.equal(1, res.result.n);
            // console.log("Removed the document with the field a equal to 3");

        })
    });
}