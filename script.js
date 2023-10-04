class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    addHuman(human) {
        if (human instanceof Human) {
            if (!this.people) {
                this.people = [];
            }
            this.people.push(human);
            console.log(`Human ${human.name} added to flat`);
        } else {
            console.error("Invalid value!");
        }
    }
}

class House {
    constructor(maxAmountOfFlats) {
        this.flats = [];
        this.maxAmountOfFlats = maxAmountOfFlats;
    }

    addFlat (flat) {
        if (flat instanceof Flat) {
            if (this.flats.length < this.maxAmountOfFlats) {
                this.flats.push(flat);
            }
            else {
                console.log('The maximum number of flats in the house has been reached');
            }
        }
    }
}

const human1 = new Human('Anna', 'female');
const human2 = new Human('Iryna', 'female');
const human3 = new Human('Willy', 'male');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addHuman(human2);
flat1.addHuman(human3);
flat2.addHuman(human1);

const house1 = new House(2);
house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);
