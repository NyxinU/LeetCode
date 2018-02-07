const product = (array) => {
  let left = [1];
  let right = [1];
  let res = []
;
  for (let index = 0; index < array.length - 1; index++) {
    let p = left[index] * array[index];
    left.push(p);
  }

  for (let index = array.length - 1; index > 0; index--) {
    let p = right[0] * array[index];
    right.unshift(p);
  }

  for (let index = 0; index < array.length; index++) {
    res.push(left[index] * right[index]);    
  }
};

console.log('====================================');
console.log(product([1, 2, 3, 5, 10]));
console.log('====================================');