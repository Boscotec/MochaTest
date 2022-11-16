module.exports = class Checkout {
    constructor() {
        this.prices = new Object();
        this.items = new Object();
        this.discounts = new Object();
    }

    addItemPrice(item, price) {
        this.prices[item] = price;
    }

    addItem(item) {
        if (this.items[item] === undefined) {
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }

    addDiscount(item, itemCount, discountPrice) {
        this.discounts[item] = { cnt: itemCount, price: discountPrice };
    }

    calculateDiscount(item, itemCnt, discount) {
        var total = 0;

        var nbrOfDiscounts = itemCnt / discount.cnt;
        total += nbrOfDiscounts * discount.price;

        var reminder = itemCnt % discount.cnt;
        total += (reminder * this.prices[item]);

        return total;
    }

    calculateItemTotal(item) {
        var total = 0;
        var discount = this.discounts[item];
        if (discount != undefined) {
           total += this.calculateDiscount(item, this.items[item], discount);
        } else {
            total += (this.prices[item] * this.items[item]);
        }

        return total;
    }

    calculateTotal() {
        var total = 0;
        for (var item in this.items) {
           total += this.calculateItemTotal(item);
        }

        return total;
    }
}