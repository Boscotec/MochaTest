const AsyncTest = require('../src/async.js');
var expect = require('chai').expect;

var asyncTest;

beforeEach('init AsyncTest', () => {
    asyncTest = new AsyncTest();
})

it('test async', (done) => {
    asyncTest.myAsyncFunction((str) => {
        expect(str).to.equal('Welcome');
        done();
    })
});

it('test promise', () => {
    return asyncTest.myPromiseFunction().then(res => {
        expect(res).to.equal('Welcome');
    })
});

it('test async await', async () => {
    const result = await asyncTest.myPromiseFunction();
    expect(result).to.equal('Welcome');
});