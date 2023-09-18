function hasPairSum(array1,  target){
    for(let i= 0; i < array1.length; i++){
        for(let j= i + 1; j < array1.length; j++){
            if((array1[i] + array1[j]) == target){
                console.log('array1[i] ', array1[i]);
                console.log('array1[j] ', array1[j]);
                return true;
            }
        }
    }
    return false;
}
function hasPairSum2(array1,  target){
    for(let i= 0; i < array1.length; i++){
        for(let j= i + 1; j < array1.length; j++){
            if((array1[i] + array1[j]) == target){
                console.log('array1[i] ', array1[i]);
                console.log('array1[j] ', array1[j]);
                return true;
            }
        }
    }
    return false;
}

let result = hasPairSum([-3,0,2,4,6,11],  8);
console.log(result)