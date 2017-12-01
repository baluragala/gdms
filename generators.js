/*
function* generateNumbers() {
    console.log('first');
    console.log('second');
    console.log('third');
    //yield 'waiting for api to complete';
    console.log('1');
    console.log('2');
    console.log('3');
    //yield 'waiting for 2 api to complete';
    console.log('I');
    console.log('II');
    console.log('III');

}

generateNumbers();*/

function* pausedCalculator(startWith) {
    let r1 = startWith + (yield(10));
    console.log('r1', r1);
    let r2 = r1 + (yield(10));
    console.log('r2', r2);
    let r3 = r2 + (yield(10));
    console.log('r3', r3);
}

var it = pausedCalculator(10);
