//  'use strict';

// var assert = require('chai').assert;
// var _ = require('underscore');

// var WebClient = require('./../src/WebClient');

// describe('Airware Hangar API Example', function() {

//     /**
//      * Sample workflow test with generators
//      */

//     it("Example usage - GET /api", function *() {
//         var webClient = new WebClient();
//         var data = yield webClient.getAllData();
//         console.log(data);
//         assert.notEqual(data.length, null, 'Data coming back should not be null');
//         assert.notEqual(data.length, 0, 'Data coming back should not be of 0 size');
//     });

//     it("Example usage - GET /api/hangar/<id>", function *() {
//         var webClient = new WebClient();
//         var data = yield webClient.getHangar('561848a3caa1b5030098aa4a');
//         console.log(data);
//         assert.notEqual(data, null, 'Data coming back should not be null');
//         assert.notEqual(data, 0, 'Data coming back should not be of 0 size');
//     });
// });