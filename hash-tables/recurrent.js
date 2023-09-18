
/**
 * Complexity O(n^2)
 * @param {*} input 
 * @returns 
 */
function firstRecurringCharacter(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.length; j++){
            if(input[i]=== input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}

/**
 * Complexity O(n)
 * @param {*} input 
 */
function firstRecurringCharacter2(input){
    let map = {};
    for(let i = 0; i< input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }else{
            map[input[i]] = i;
        }
    }
    return undefined;
}

const res = firstRecurringCharacter([2,1,5,1,6,5,1,2,7,3,6,6])
console.log(res);