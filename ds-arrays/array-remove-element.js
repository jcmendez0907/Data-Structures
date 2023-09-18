var removeElement = function(nums, k){
    j = nums.length-1;
    while(j >= 0){
        if(nums[j] === k){
            nums.splice(j,1);
        }
        j--;
    }
    return nums.length;
}

var  removeElement2 = function(nums, k){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === k){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
}

var removeElement3 = function(nums, k){
    let j = 0;
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] !== k){ 
            nums[j++] = nums[i];
        }
    }
    console.log(nums);
    
    return j;
}



let res = removeElement2([0,1,2,2,3,0,4,2], 2);
console.log(res);
