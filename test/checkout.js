const { execPath } = require('process');
const Checkout = require('../src/checkout.js');
var expect = require('chai').expect;

var checkout;

beforeEach('init AsyncTest', () => {
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
})

it('can calculate the current total', () => {
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('can add multiple items and get current total', () => {
    checkout.addItem('a');
    checkout.addItem('b');

    expect(checkout.calculateTotal()).to.equal(3);
});

it('can add discount rule', () => {
    checkout.addDiscount('a', 2, 3);
});

it('can apply discount rule to the total', () => {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
})