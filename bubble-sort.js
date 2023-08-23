
function bubbleSort(arr) {
    let swapFlag = 0;
    
    // Iterate through the array
    for (let i = 0; i < arr.length-1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]) {
        // Swap those values
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        // print array to watch algorithm process data
        console.log(arr.join(","));
        swapFlag = 1;
      }
    }

    // If you get to the end of the array and no swaps have occurred, return
    if (swapFlag === 0) {
      return;
    }
    // Otherwise, repeat from the beginning
    else{
      bubbleSort(arr);
    }
}


module.exports = bubbleSort;