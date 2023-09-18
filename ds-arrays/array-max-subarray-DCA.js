function maximo(a,b,c){
    if(a>= b && a>= c){
        return a;
    }else if(b>=a && b >= c){
        return b;
    }else {
        return c;
    }
}

function maxSumCrossingSubarray(arr, low, high, mid){
    let left_sum = -Infinity;
    let right_sum = -Infinity;
    let sum = 0;
    //obtener suma de la izquierda
    for(let i = mid; i >= low; i-- ){
        sum = sum + arr[i];
        left_sum =  sum > left_sum ? sum : left_sum;
    }
    sum = 0;
    //obtener suma de la derecha
    for(let i = mid+1; i <= high; i++){
        sum = sum + arr[i];
        right_sum =  sum > right_sum ? sum : right_sum;
    }

    return (left_sum + right_sum);
}

function maxSubArraySumDCA(arr, low, high){
    if(high === low){
        return arr[high];
    }
    let mid = parseInt(((low + high) / 2).toString()) ;
    let max_sum_left = maxSubArraySumDCA(arr, low, mid);
    let max_sum_right = maxSubArraySumDCA(arr, mid+1, high);
    let max_sum_cross= maxSumCrossingSubarray(arr, low, high, mid);

    return maximo(max_sum_left, max_sum_right, max_sum_cross);
}

let array = [-2,1,-3,4,-1,2,1,-5,4];
let n = array.length-1;
const result = maxSubArraySumDCA(array, 0, n );
console.log(result);

