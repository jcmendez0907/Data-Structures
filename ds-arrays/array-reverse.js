function reverse(str){
    //let arrayString = str.split('');
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'invalid input';
    }
    let n = str.length
    let result = Array(n);
    let t = '';
    for(let i = 0; i < str.length / 2; i++){
        t = str.charAt(i);
        result[i] = str.charAt(n - i - 1);
        result[n - i - 1] = t;
    }
    return result.join('');
}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

let result = reverse4('Hi my name is Juan');
console.log(result);