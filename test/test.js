var expect = require('chai').expect;

describe('test_suite_1', () => {
    before('setup', () => {
        console.log("Setup");
    });

    after('teardown', () => {
        console.log("Teardown");
    });

    beforeEach('setup for each test', () => {
        console.log("Setup for each test");
    });

    afterEach('teardown for each test', () => {
        console.log("teardown for each call");
    });

    it('test_1', () => {
        console.log("test 1");
        expect(true).to.equal(true);
    });   
    
    it('test_2', () => {
        console.log("test 2");
        expect(true).to.equal(true);
    }); 
});

describe('test_suite_2', () => {
    it('test_1', () => {
        expect(true).to.equal(true);
    });    
});