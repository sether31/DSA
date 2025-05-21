function mergeSort(arr){
  if(arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortLeftHalf = mergeSort(leftHalf);
  const sortRightHalf = mergeSort(rightHalf);

  return merge(sortLeftHalf, sortRightHalf);
}

function merge(left, right){
  const arr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      arr.push(
        left[leftIndex]
      );
      leftIndex++;
    } else{
      arr.push(
        right[rightIndex]
      );
      rightIndex++;
    }
  }

  while(leftIndex < left.length){
    arr.push(
      left[leftIndex]
    );
    leftIndex++;
  }

  while(rightIndex < right.length){
    arr.push(
      right[rightIndex]
    );
    rightIndex++;
  }

  return arr;
}

console.log(
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1])
);