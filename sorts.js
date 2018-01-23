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

// const quickSort = arr => {
//   let pivot;
//   let wall = 0;
//   //for (var j = 0, len = arr.length; j < len; j++) {
//   pivot = arr[arr.length - 1]; // last
//   for (var i = wall, len = arr.length - 1; i < len; i++) {
//     if (arr[i] < pivot) {
//       [arr[i], arr[wall + 1]] = [arr[wall + 1], arr[i]];
//       wall++;
//       console.log("wall: ", wall);
//       console.log("arr[i]: ", arr[i]);
//     }
//   }
//   //[arr[wall+1],arr[arr.length-1]] = [arr[arr.length-1], arr[wall+1]]
//   //wall++;
//   //}
//
//   return arr;
// };

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (high - low <= 0) return;
  let splitPoint = split(arr, low, high);
  quickSort(arr, low, splitPoint - 1);
  quickSort(arr, splitPoint + 1, high);
  return arr;
};

const split = (arr, low, high) => {
  let left = low + 1;
  let right = high;
  let pivot = arr[low];

  while (true) {
    while (left <= right) {
      if (arr[left] < pivot) {
        left++;
      } else {
        break;
      }
    }
    while (right > left) {
      if (arr[right] < pivot) {
        break;
      } else {
        right--;
      }
    }
    if (left >= right) break;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  arr[low] = arr[left - 1];
  arr[left - 1] = pivot;

  return left - 1;
};

const benchmark = (arr, arrNum, sortNum) => {
  sortNames = ["Insertion", "Bubble", "Merge", "Quick"];
  sortFunctions = [insertionSort, bubbleSort, mergeSort, quickSort];
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
      `|| * ${sortNames[i]} Sort: ${(Date.now() - beforeTime) /
        sortNum} milliseconds`
    );
  }
};

let arr = [1, 9, 0, 4, 2, 0, 23];
let longArr = [];

let arrNum = 50000;
let sortNum = 5;
for (let i = 0; i < arrNum; i++) {
  longArr.push(Math.floor(Math.random() * 1000));
}

//console.log("arr: ", arr);
//console.log("insertionSort(arr): ", insertionSort(arr.slice()));
//console.log("bubbleSort(arr): ", bubbleSort(arr.slice()));
//console.log("mergeSort(arr): ", mergeSort(arr.slice()));

//console.log("quickSort: ", quickSort(arr.slice()));

benchmark(longArr, arrNum, sortNum);
