/*const scores = [60, 40, 56, 77, 89];
let result = scores.filter((n, arr) => {
    return n > 60
});

console.log(result);

let smartPhones = [
    {name: 'iphone', price: 649},
    {name: 'Galaxy S6', price: 576},
    {name: 'Galaxy Note 5', price: 489}
];

// ES6
console.log(smartPhones.map(smartPhone => smartPhone.name)); // [649, 576, 489]*/


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = () => {
        console.log(this);
        console.log(`Name : ${this.name} and Age : ${this.age}`)
    }
}

let james = new Person('james', 23);
james.print();
let print = james.print;
print();