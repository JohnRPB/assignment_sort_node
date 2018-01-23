const insert = (arr, rightIndex, value) => {
  let i = rightIndex;
  while (i >= 0 && arr[i] > value) {
    arr[i + 1] = arr[i];
    i -= 1;
  }
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

const benchmark = (arr, arrNum, sortNum) => {
  sortNames = ["Insertion", "Bubble", "Merge"];
  sortFunctions = [insertionSort, bubbleSort, mergeSort];
  console.log("=============================================================");
  console.log(
    `===== Average Time to Sort a ${arrNum} Element Array (${sortNum}x) =====`
  );
  console.log("=============================================================");
  for (let i = 0; i < sortNames.length; i++) {
    let beforeTime = Date.now();
    for (let h = 0; h < sortNum; h++) {
      sortFunctions[i](arr.slice());
    }
    console.log(
      `|| ${sortNames[i]} Sort: ${(Date.now() - beforeTime) / 5} milliseconds`
    );
  }
  console.log("=============================================================");
};

let arr = [1, 9, 0, 4, 2, 0, 23];

let arrNum = 10000;
let sortNum = 5;
for (let i = 0; i < arrNum; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

// console.log("insertionSort(arr): ", insertionSort(arr));
//console.log("bubbleSort(arr): ", bubbleSort(arr));
//console.log("mergeSort(arr): ", mergeSort(arr));

benchmark(arr, arrNum, sortNum);
