'use strict';

var co = require("co");
var request = require("co-request");

var APP_URL = 'https://guarded-fortress-9150.herokuapp.com';

/**
 * Constructor for the WebClient
 * @constructor
 */
function WebClient() {
}

/**
 * Makes an api request to base url on path with the options specified
 * @param options
 * @returns {*}
 */
WebClient.prototype.apiCall = function *(options) {
    // Add options url to base url
    options.url = APP_URL + options.url;
    options.json = !options.parseJSON;
    // Make http request call
    var result = yield request(options);
    return options.parseJSON ? JSON.parse(result.body) : result.body;
};

/**
 * Gets all the data from https://guarded-fortress-9150.herokuapp.com/api
 * @returns {*}
 */
WebClient.prototype.getAllData = function *() {
    var data = yield this.apiCall({
        method: 'GET',
        url: '/api'
    });

    return data;
};

/**
 * Gets the data for a hangar from the id given
 * @param hangarId
 * @returns {*}
 */
WebClient.prototype.getHangar = function *(hangarId) {
    var hangar = yield this.apiCall({
        method: 'GET',
        url: '/api/hangar/' + hangarId
    });

    return hangar;
};

WebClient.prototype.getAircraft = function *(aircraftId) {
    var aircraft = yield this.apiCall({
        method: 'GET',
        url: '/api/aircraft/' + aircraftId
    });

    return aircraft;
};

WebClient.prototype.createHangar = function *(info) {
    var hangar = yield this.apiCall({
        method: 'POST', 
        url: '/api/hangar',
        form : {
            name: info.name,
            description: info.description,
            location: info.location,
            size: info.size,
            capacity: info.capacity
        }
    })
    return hangar;
};

WebClient.prototype.updateHangar = function *(hangarId, info) {
    var hangar = yield this.apiCall({
        method: 'PUT',
        url: '/api/hangar/'+hangarId,
        form: {
            name: info.name,
            description: info.description,
            location: info.location,
            size: info.size,
            capacity: info.capacity
        }  
    });
    return hangar;
};

WebClient.prototype.deleteHangar = function *(hangarId) {
    var deleteHangar = yield this.apiCall({
        method: 'DELETE',
        url: '/api/hangar/'+ hangarId
    });
};

WebClient.prototype.createAircraft = function *(info) {
    var aircraft = yield this.apiCall({
        method: 'POST', 
        url: '/api/aircraft',
        form : {
            name: info.name,
            description: info.description,
            type: info.type,
            tail: info.tail,
            owner: info.owner,
            hangar: info.hangar
        }
    });
    return aircraft;
};

WebClient.prototype.updateAircraft = function *(aircraftId, info) {
    var aircraft = yield this.apiCall({
        method: 'PUT',
        url: '/api/aircraft/'+aircraftId,
        form: {
            name: info.name,
            description: info.description,
            type: info.type,
            tail: info.tail,
            owner: info.owner,
            hangar: info.hangar
        }  
    });
    return aircraft;
};

WebClient.prototype.deleteAircraft = function *(aircraftId) {
    var deleteAircraft = yield this.apiCall({
        method: 'DELETE',
        url: '/api/aircraft/'+ aircraftId
    });
};

module.exports = WebClient;