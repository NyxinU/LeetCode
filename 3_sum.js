const hash = {};

var threeSum = function (nums) {
  const res = [];
  hasher(nums);

  nums.forEach((el,idx) => {
    
  })
};

var twoSum = function (nums, target) {
  const res = [];

  nums.forEach(el => {
    hash[el]--;
    if (hash[(target - el)] > 0) {
      res.push([target - el, el, target * -1]);
    }
    hash[el]++;
  });
};

const hasher = (nums) => {
  nums.forEach(el => {
    if (hash[el]) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));