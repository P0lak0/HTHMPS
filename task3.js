const arr = [10, 8, 3, 2, 3, 1, 2, 1, 5, 6, 8, 9, 4, 3, 2, 4, 7, 8, 6, 43, 1];

const getAllSubUniqArr = (arr) => {
  const seen = new Map(); 
  let left = 0; 
  let count = 0; 

  for (let right = 0; right < arr.length; right++) {

    while (seen.has(arr[right])) {
      seen.delete(arr[left]);
      left++;
    }

    seen.set(arr[right], 1);
    count += right - left + 1; 
  }

  return count;
};

console.log(getAllSubUniqArr(arr)); // 13