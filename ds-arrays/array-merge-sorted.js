function mergedSortedArray(arr1, arr2) {
    const mergedArray = [];
    let i=0,j=0,k=0;
    let n1 = arr1.length;
    let n2 = arr2.length;
    //Traverse arr1 an insert its elements in arr3
    while(i< n2){
        mergedArray.push(arr1[i]);
        i++
    }
    //traverse arr2 and insert its element in arr3
    while(j < n2){
        mergedArray.push(arr2[j]);
        j++;
    }
    console.log(mergedArray);
    //sort array
    mergedArray.sort((a,b)=> a-b);
    
    return mergedArray;
}

function mergedSortedArray2(arr1, arr2) {
    const mergedArray = [];
    let i=0, j=0, k=0;
    let value = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
        
    }
    while(i<arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

// const result = mergedSortedArray([1,4,6], [ 2,5,16])
const result = mergedSortedArray2([1,3,5,7,8,10,41], [ 2,4,6,8,9,15,23,45,47,89])
console.log(result);