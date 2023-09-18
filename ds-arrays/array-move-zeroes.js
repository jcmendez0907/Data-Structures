var moveZeroes = function(nums){
    let posZero = 0;
    let temp = 0;
    for(let i=0; i<nums.length; i++){
        if((nums[i] !== 0)){
            temp = nums[posZero];
            nums[posZero] = nums[i];
            nums[i] = temp;
            posZero++;
        }
    }
    // return nums;
    console.log(nums);
}

var moveZeroes2 = function(nums){
    nums.reduce((a, c, i) => {
            if (c != 0) 
                nums[i] = c;
            else
            nums.push(0);
        }, nums.filter((a)=>a != 0)
      );
      console.log(nums);
}

const arr = [1,4,0,1,0,3,12, 0];
// const result = moveZeroes(arr);
const result = moveZeroes(arr);
//console.log(result);