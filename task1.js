const arr1 = [0, 0, 1, 1, 1, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const arr2 = ['dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getUniqElement = (arr) => {
  const countMap = new Map();

  arr.forEach(item => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  });

  for (const [key, value] of countMap) {
    if (value === 1) {
      return key;
    }
  }
  
  return null;
}

console.log(getUniqElement(arr1)); // 5
console.log(getUniqElement(arr2)); // 'sheep'