
function forOf(iterable) {
    let it = iterable[Symbol.iterator]();
    while (true) {
        let r = it.next();
        if (r.done)
            break;
        console.log(r.value)
    }
}

/*let arr = "Bala Krishna Ragala";

forOf(arr);*/

let empty = {};
empty[Symbol.iterator] = function () {
    let counter = 1;
    return {
        next() {
            if (counter <= 5) {
                counter++;
                return {value: 'hello', done: false};
            } else {
                return {value: undefined, done: true}
            }
        }
    }
};

/*for (let a of empty) {
    console.log(a)
}*/

forOf(empty);