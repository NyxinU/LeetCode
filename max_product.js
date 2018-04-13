var maxProduct = function (nums) {
  let subarrays = [];

  nums.join(",").split(",0,").forEach(el => {
    subarrays.push(el.split(",").map(num => parseInt(num)));
  });

};

var negativeFinder = function (arr) {

};

console.log(maxProduct([1, 2, 3, 0, 1, -2, 2, 3, -4, 0, 5, -3, 4, 6, -2, 9, -1]));
