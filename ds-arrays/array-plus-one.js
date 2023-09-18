/**
 * You are given a large integer represented as an integer array digits, 
 * where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4]
 * @param {*} nums 
 */
var plusOne = function(nums){
   let res = nums[nums.length-1];
   let sum = 0;
    for(let i = nums.length-1; res > 0; i--){
        res = (nums[i] + 1);
        if( nums.length === 1 && (res/10) === 1 ){
            nums[0].splice(0,1, (Array.from(res), Number) );
        } else{
            console.log((res/10)*10)
            nums[i] = nums + (res/10)*10;
        }
        
    }
    console.log(nums);
    return nums;
    
}

let res = plusOne([9,9,9]);
console.log(res);