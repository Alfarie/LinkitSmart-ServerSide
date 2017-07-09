var device_binding = {
    "type": "object",
    "properties": {
        "uid": {
            "description": "user id from firebase",
            "type": ["string"]
        },
        "did": {
            "description": "device id from devies",
            "type": ["string"]
        },
        "key": {
            "description": "password",
            "type": ["string"]
        }
    },
    "required": ["uid", "did", "key"]
}

var device_online = {
    'type': 'object',
    'properties': {
        'uid': {
            'type': ['string']
        }
    },
    'required': ['uid']
}

module.exports.device_binding = device_binding;
module.exports.device_online = device_online;
var example = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://mynet.com/schemas/user.json#",
    "title": "User",
    "description": "User profile with connections",
    "type": "object",
    "properties": {
        "id": {
            "description": "positive integer or string of digits",
            "type": ["string", "integer"],
            "pattern": "^[1-9][0-9]*$",
            "minimum": 1
        },
        "name": { "type": "string", "maxLength": 128 },
        "email": { "type": "string", "format": "email" },
        "phone": { "type": "string", "pattern": "^[0-9()\\-\\.\\s]+$" },
        "address": {
            "type": "object",
            "additionalProperties": { "type": "string" },
            "maxProperties": 6,
            "required": ["street", "postcode", "city", "country"]
        },
        "personal": {
            "type": "object",
            "properties": {
                "DOB": { "type": "string", "format": "date" },
                "age": { "type": "integer", "minimum": 13 },
                "gender": { "enum": ["female", "male"] }
            },
            "required": ["DOB", "age"],
            "additionalProperties": false
        },
        "connections": {
            "type": "array",
            "maxItems": 150,
            "items": {
                "title": "Connection",
                "description": "User connection schema",
                "type": "object",
                "properties": {
                    "id": {
                        "type": ["string", "integer"],
                        "pattern": "^[1-9][0-9]*$",
                        "minimum": 1
                    },
                    "name": { "type": "string", "maxLength": 128 },
                    "since": { "type": "string", "format": "date" },
                    "connType": { "type": "string" },
                    "relation": {},
                    "close": {}
                },
                "oneOf": [{
                        "properties": {
                            "connType": { "enum": ["relative"] },
                            "relation": { "type": "string" }
                        },
                        "dependencies": {
                            "relation": ["close"]
                        }
                    },
                    {
                        "properties": {
                            "connType": { "enum": ["friend", "colleague", "other"] },
                            "relation": { "not": {} },
                            "close": { "not": {} }
                        }
                    }
                ],
                "required": ["id", "name", "since", "connType"],
                "additionalProperties": false
            }
        },
        "feeds": {
            "title": "feeds",
            "description": "Feeds user subscribes to",
            "type": "object",
            "patternProperties": {
                "^[A-Za-z]+$": { "type": "boolean" }
            },
            "additionalProperties": false
        },
        "createdAt": { "type": "string", "format": "date-time" }
    }
}