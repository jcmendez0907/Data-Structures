function logAllPairsOfArray(array){
    for (let i = 0; i < array.length; i++){
        for (let j= 0; j <array.length; j++){
            console.log(i,j);
        }
    }
}

logAllPairsOfArray(['a', 'b', 'c', 'd', 'e'])