var twoSum = function(nums, target) {
    let complementAdUp = 0;
    const mySet = new Map();
    for(let i=0; i < nums.length; i++){
        mySet.set(nums[i],i)
    }
    for(let i =0; i< nums.length; i++){
        complementAdUp = target - nums[i];
        if(mySet.has(complementAdUp) && mySet.get(complementAdUp) !== i ){
            return [i, mySet.get(complementAdUp)];
        }
    }
    return [];
    
}

const result = twoSum([3,3], 6);
console.log(result);