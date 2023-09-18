var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let tempSum = 0;
    for (let i = 0; i < nums.length; i++){
        tempSum = currentSum + nums[i];
        currentSum = Math.max(nums[i], tempSum);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;

};


function max(a,b) { return (a > b) ? a : b; }
function maximun(a,b,c) { return (Math.max(Math.max(a,b), c)) }
/*
function maximun(a,b,c){
    if(a >= b && a>= c)
        return a;
    else if(b>= a && b>= c)
        return b;
    else    
        return c;
}
*/

function max_crossing_subarray(array, low, mid, high){
    let left_sum = -Infinity;
    let sum = 0;
    // iteratins from middle elemento to the lowest elemnet to find
    // the maximun sum of the left subarray containing the middle
    // element also
    for(let i = mid; i >= low; i--){
        sum = sum + array[i];
        if( sum > left_sum)
            left_sum = sum;
    }
    let right_sum = -Infinity;
    sum = 0;
    for ( let i = mid +1 ; i <= high; i++){
        sum = sum + array[i];
        if(sum > right_sum)
            right_sum = sum;
    }

    return (left_sum + right_sum);
    
}

function maxSubArraySum(array, low, high){
    //console.log('inicia ', s)
    console.log(array, low, high)
    //only one element in the array
    if(high === low){
        return array[high];
    }
    // middle element of the array
    let mid =  parseInt(((high + low) / 2).toString());

    // maximun sum in the left subarray
    let maximum_sum_left_subarray = maxSubArraySum(array, low, mid);
    // maximun sum in the right subarray
    let maximum_sum_right_subarray = maxSubArraySum(array, mid+1, high);
    // masimun sun inthe array containing the middle element
    let maximun_sum_crossing_subarray = max_crossing_subarray(array, low, mid, high);
    console.log('maximum_sum_left_subarray ', maximum_sum_left_subarray)
    console.log('maximum_sum_right_subarray ', maximum_sum_right_subarray)
    console.log('maximun_sum_crossing_subarray ', maximun_sum_crossing_subarray)

    //return de maximun among the above three numbers
    const max_final = (Math.max(Math.max(maximum_sum_left_subarray,maximum_sum_right_subarray), maximun_sum_crossing_subarray));
    console.log('max_final ', max_final)
    
    return max_final;
}

let arr = [5,4,-1,7,8];
let n = arr.length - 1;
let cont = 0;
// let max_sum = maxSubArraySum(arr, 0, n );
let  max_sum = maxSubArray([5,4,-1,7,8,-1])
console.log('R: ', max_sum);
