function calculatePrice({price, tax, discount = 5}) {

    console.log(price, tax, discount)
}

calculatePrice({tax:10,price:200,discount:25});