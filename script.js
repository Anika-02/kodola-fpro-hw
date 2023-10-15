class Student {
    constructor(name, surname, birthYear, marks) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.marks = marks;
        this.presents = [];
    }

    getAge() {
        let currentYear = new Date().getFullYear();
        console.log(`Age of student: ${currentYear - this.birthYear}`);
    }

    getAverageMark() {
        let sum = this.marks.reduce((total, mark) => total + mark, 0);
        let averageMark = sum / this.marks.length;
        console.log(`Average mark: ${averageMark.toFixed(2)}`);
        return averageMark;
    }

    present() {
        if (this.presents.length < 25) {
            this.presents.push(true);
        } else {
            console.log('You have already had 25 attendances');
        }
    }

    absent() {
        if (this.presents.length < 25) {
            this.presents.push(false);
        } else {
            console.log('You have already had 25 attendances');
        }
    }

    summary() {
        const averageMark = this.getAverageMark();
        const attendance = this.presents.filter(value => value).length / this.presents.length;

        if (averageMark > 90 && attendance > 0.9) {
            console.log('Молодець!');
        } else if (averageMark > 90 || attendance > 0.9) {
            console.log('Добре, але можна краще');
        } else {
            console.log('Редиска!');
        }
    }
}

let student1 = new Student('Anna', 'Kodola', 2004, [92, 86, 95, 94, 85]);
let student2 = new Student('Iryna', 'Wang', 2002, [95, 77, 100, 88, 96]);
let student3 = new Student('Tom', 'Holland', 2001, [85, 76, 66, 95, 92]);

student1.present();
student1.present();
student1.present();

student2.present();
student2.absent();
student2.present();

student3.present();
student3.absent();
student3.absent();

console.log(`${student1.name} ${student1.surname}:`);
student1.getAge();
student1.summary();

console.log(`\n${student2.name} ${student2.surname}:`);
student2.getAge();
student2.summary();

console.log(`\n${student3.name} ${student3.surname}:`);
student3.getAge();
student3.summary();