/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //make an array of numArr length for bounds
    let arr = numArray.length;

    //iterate through array
    for(i=0; i<arr; i++){
        for(j=0; j <arr; j++){ //nested for loop
            if (numArray[j] > numArray[j+1]){ //compare next item
                let temp = numArray[j];
                numArray[j] = numArray[j+1]; //swap them out
                numArray[j+1] = temp
            }
        }
    } 
    return numArray
}

console.log(bubbleSort([10,9,6, 4,3,2])) //should return 2,3,4,6,9,10