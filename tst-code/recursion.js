function countDown(number){
    console.log(number);
    const newNumber = number -1;
    if(newNumber > 0){
        countDown(newNumber);
    }
}

function factorial(x){
    if (x === 0){
        console.log(x);
        return 1;
    }
    else {
        console.log(x);
        return x * factorial( x - 1);
    }
}

// countDown(10);
const result = factorial(10);
console.log(result);
