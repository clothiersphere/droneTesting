 'use strict';

var assert = require('chai').assert;
var _ = require('underscore');

var WebClient = require('./../src/WebClient');


describe('Airware Hangar API Example', function() {
    let hangarId = "";
    /**
     * Sample workflow test with generators
     */

    // it("Example usage - GET /api", function *() {
    //     var webClient = new WebClient();
    //     var data = yield webClient.getAllData();
    //     console.log(data);
    //     assert.notEqual(data.length, null, 'Data coming back should not be null');
    //     assert.notEqual(data.length, 0, 'Data coming back should not be of 0 size');
    // });

    // it("Example usage - GET /api/hangar/<id>", function *() {
    //     var webClient = new WebClient();
    //     var data = yield webClient.getHangar('573b8bbc90e70903000aec8a');
    //     console.log(data);
    //     assert.notEqual(data, null, 'Data coming back should not be null');
    //     assert.notEqual(data, 0, 'Data coming back should not be of 0 size');
    // });

    it("POST - Should create a new hangar", function *()  {
        var webClient = new WebClient();
        var info = {
            name: "Angela",
            description: "Angela's Hangar",
            location: "San Francisco",
            size: 1000,
            capacity: 1000 
        }  
        var data = yield webClient.createHangar(info)
        console.log(data._id);
        console.log(data);
        hangarId = data._id;
    })

    it("POST - Should create a new aircraft", function *()  {
        var webClient = new WebClient();
        
    })

    it("DELETE - Should delete a hangar", function *()  {
        var webClient = new WebClient();
        const getHangarPre = yield webClient.getAllData();
        var deleteHangar = yield webClient.deleteHangar(hangarId)
        const getHangarPost = yield webClient.getAllData();

        assert.equal(getHangarPre.length, getHangarPost.length+1, 'Deleting a hangar should reduce hangar postDeletion count by 1');

    })

    // it("DELETE - Should delete an aircraft", function *()  {

    // }
});