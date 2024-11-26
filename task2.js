const arr1 = [0, 0, 1, 1, 1, 1, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const arr2 = ['dog', 'dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getPopularItems = (arr, n) => {
  const countMap = new Map();

  arr.forEach(item => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  });

  const sortedItems = Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]);

  return sortedItems.slice(0, n).map(item => item[0]);
};

console.log(getPopularItems(arr1, 2)); // [1, 3]
console.log(getPopularItems(arr1, 1)); // [1]
console.log(getPopularItems(arr2, 1)); // ['dog']
console.log(getPopularItems(arr2, 3)); // ['dog', 'cat', 'parrot']