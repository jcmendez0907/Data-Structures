/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * @param {*} nums 
 * @param {*} target 
 */
var searchInsert = function(nums, target){
    return searchInsertHelper(nums, target, 0, nums.length-1);
}

var searchInsertHelper = function(nums, target, low, high){
    console.log(target, low, high)
    if(target > nums[high] ){
        return high + 1;
    } else if(target < nums[low] ){
        return low;
    }else{
        mid = parseInt(((low+high)/2).toString());
        
        if(target === nums[mid]){
            return mid;
        }else if( target < nums[mid]) {
            return searchInsertHelper(nums, target, low, mid -1);
        } else {
            return searchInsertHelper(nums, target, mid+1, high );
        }
    }
        
    
}

var searchInsert2 = function(nums, target){
    let start = 0;
    let end = nums.length - 1;
    while(start <= end ){
        const mid = Math.floor((start+end)/2);
        if(nums[mid] < target){
            start = mid +1;
        }else{
            end = mid-1;
        }
    }
    return start;
}

arr = [1,3,5,15,30,56,76];
const res = searchInsert2(arr, 28)
console.log(res);