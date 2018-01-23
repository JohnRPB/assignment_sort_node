const insert = (arr, rightIndex, value) => {
  // value is the value of arr[rightIndex + 1]
  // rightIndex is the furthest right sorted element

  // Step through sorted elements right to left.
  // As long as your value is less than the element
  // at arr[i] and you still have elements
  let i = rightIndex;
  while (i >= 0 && arr[i] > value) {
    // copy the element
    arr[i + 1] = arr[i];
    i -= 1;
  }

  // insert the actual element
  arr[i + 1] = value;
};

const insertionSort = arr => {
  for (var i = 1, len = arr.length; i < len; i++) {
    insert(arr, i - 1, arr[i]);
  }
  return arr;
};

const bubbleSort = arr => {
  for (var pass = 0, len = arr.length - 1; pass < len; pass++) {
    for (var i = 0, len = arr.length - 1 - pass; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; //swap
      }
    }
  }
  return arr;
};

const merge = (leftArr, rightArr) => {
  let mergedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      mergedArr.push(leftArr.shift());
    } else {
      mergedArr.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    mergedArr.push(leftArr.shift());
  }
  while (rightArr.length) {
    mergedArr.push(rightArr.shift());
  }
  return mergedArr;
};

const mergeSort = array => {
  if (array.length === 1) return array;
  let midPoint = parseInt(array.length / 2);
  let leftArr = array.slice(0, midPoint);
  let rightArr = array.slice(midPoint);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

// Date()
// run the sort
// Date()
// subtract 1st from second

let arr = [1, 9, 0, 4, 2, 0, 23]

// console.log("insertionSort(arr): ", insertionSort(arr));
//console.log("bubbleSort(arr): ", bubbleSort(arr));
console.log('mergeSort(arr): ', mergeSort(arr));
