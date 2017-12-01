let name = 'bala', age = 33;
let person = {
    name,
    age,
    getHobbies() {
        return ['teaching', 'browsing']
    },
    [`${name}_${age}_key`]:'id'
};

let key = 'name';
console.log(person);