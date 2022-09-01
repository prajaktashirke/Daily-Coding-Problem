// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const getProduct = arr => {
  const updatedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product = product * arr[j];
      }
    }
    updatedArr.push(product);
  }
  console.log(updatedArr);
  return updatedArr;
};

getProduct([1, 2, 3, 4, 5]); // [ 120, 60, 40, 30, 24 ]
getProduct([3, 2, 1]); // [ 2, 3, 6 ]
