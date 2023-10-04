class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showPersonInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age} years`);
    }
}

class Car {
    constructor(brand, model, yearOfIssue, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.yearOfIssue = yearOfIssue;
        this.licensePlate = licensePlate;
        this.owner = null;
    }
    assignOwner(owner) {
        if (owner instanceof Person && owner.age > 18) {
            this.owner = owner;
        }
        else {
            console.log('The person is under 18 years of age and therefore cannot be the owner of the car');
        }
    }

    showInfo () {
        console.log(`Car:\nBrand: ${this.brand}\nModel: ${this.model}\nYear of issue: ${this.yearOfIssue}\nLicense plate: ${this.licensePlate}` );
        if (this.owner) {
            console.log("Owner:");
            this.owner.showPersonInfo();
        } else {
            console.log("The car does not have an owner.");
        }
    }
}

const person1 = new Person('Anna', 19);
const person2 = new Person('Iryna', 24);
const person3 = new Person('Liza', 15);

const car1 = new Car("Toyota", "Camry", 2023, "ВН1666КХ");
const car2 = new Car("Subaru", "Outback", 2023, "АЕ3331АВ");
const car3 = new Car("BMW", "X5", 2022, "СН1115АС");

car1.assignOwner(person1);
car1.showInfo();
console.log('\n');

car2.assignOwner(person2);
car2.showInfo();
console.log('\n');

car3.assignOwner(person3);
car3.showInfo();