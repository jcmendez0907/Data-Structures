var removeDuplicates = function(nums){
   let temp = [];
   let k = 0;
   for (let i = 0; i < nums.length-1; i++){
        if(nums[i] != nums[i+1])
            temp[k++] = nums[i];
   }
   temp[k++] = nums[nums.length-1];
   for(let i = 0; i<nums.length; i++){
    nums[i] = temp[i] != undefined ? temp[i] : '_';
   }
   console.log(nums)
   return k;
}

var removeDuplicates2 = function(nums){
    const mySet = new Set(nums);
    const mySetArray = Array.from(mySet);
    for(let i=0; i< mySetArray.length; i++){
        nums[i]= mySetArray[i];
    }
    console.log(nums);
    return mySetArray.length;
}

const res = removeDuplicates2([0,0,1,1,1,2,2,3,3,4]);
console.log(res);