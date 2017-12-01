function sum(a1, a2, ...args) {
    let r = 0;
    for (let a of args) {
        r += a;
    }
    return r;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));