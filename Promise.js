let p = new Promise(function (resolve, reject) {
    setTimeout(() => resolve({message: 'Yay!!!, promise resolved'}), 3000)
});

p.then(data => console.log(data)).catch(err => console.error(err))