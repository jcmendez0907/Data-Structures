const strings = ['a', 'b', 'c', 'd', 'e'];

strings.unshift('x'); // O(n)

console.log(strings);

strings.splice(2,0,'z'); //O(n)

console.log(strings);

// dynamic arrays


