class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    };

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };

    static SIZE_BIG = {
        price: 100,
        calories: 40
    };

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    };

    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    };

    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    };

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    };

    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    };

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let sizePrice = this.size.price;
        let stuffingPrice = this.stuffing.price;
        let toppingsPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        return sizePrice + stuffingPrice + toppingsPrice;
    }

    calculateCalories() {
        let sizeCalories = this.size.calories;
        let stuffingCalories = this.stuffing.calories;
        let toppingsCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
        return sizeCalories + stuffingCalories + toppingsCalories;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log('Calories: ' + hamburger.calculateCalories());

console.log('Price: ' + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('Price with sauce: ' + hamburger.calculatePrice());