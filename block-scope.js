/*
var x = 3;

function randomize(flag) {
    var x; //hoisting
    if (flag) {
        x = Math.random();
        return x;
    }
    return x;
}

console.log(randomize(false));*/

let x = 3;
function randomize(flag) {
    if (flag) {
        let x = Math.random();
        return x;
    }
    return x;
}

console.log(randomize(false));




