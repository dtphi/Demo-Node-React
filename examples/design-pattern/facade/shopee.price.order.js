class Discount {
    constructor(discount) {
        this.discount = discount;
    }

    cal(price) {
        return price * 0.5
    }
}

class Shipping {
    constructor(shipping) {
        this.shipping = shipping;
    }

    cal() {
        return 5
    }
}

class Fees {
    constructor(fees) {
        this.fees = fees;
    }

    cal(value) {
        return value * 1.05 
    }

    getTotal() {
        return this.fees;
    }
    getTotalWithDiscount() {
        return this.getTotal() - this.getDiscount();
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }

}

class ShopeeFacadePattern {
    constructor() {
        this.discount = new Discount()
        this.shipping = new Shipping()
        this.fees = new Fees()
    }

    cal(price) {
        price = this.discount.cal(price)
        price = this.fees.cal(price)
        price += this.shipping.cal()

        return price
    }
}

function buy(price) {
    const shopee = new ShopeeFacadePattern()
    console.log(`Price >>>>${shopee.cal(price)}`)
}

buy(100000)