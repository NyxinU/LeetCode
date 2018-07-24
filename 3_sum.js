
var threeSum = function (nums) {
  let res = [];
  let sorted = nums.sort((a,b) => {
    return a - b; 
  });
  console.log(sorted)
  while(sorted.length >= 3) {
    let target = sorted.pop();
    res = res.concat(twoSumTarget(sorted, target));
  }
  return res;
};

const twoSumTarget = (sortedNums, target) => {
  let res = [];
  let i = 0;
  let j = (sortedNums.length - 1);

  while (i < j) {
    if (sortedNums[i] + sortedNums[j] === target * -1) {
      res.push([sortedNums[i], sortedNums[j], target]);
      i--;
      j--;
    } else if (sortedNums[i] + sortedNums[j] > target * -1) {
      j--;
    } else {
      i++;
    }
  }
  return res;
};

const threeMax = (arr) => {
  let res = [];
  let counter = {};

  arr.forEach(el => {
    if(counter[el]) {
      if(counter[el] < 3) {
        counter[el]++;
      }
    } else {
      counter[el] = 1;
    }
  });

  Object.keys(counter).forEach(key => {})
};


// var threeSum = function (nums) {
//   let res = {};
//   let sorted = nums.sort((a, b) => { return a - b; });
//   while (sorted.length >= 3) {
//     let target = sorted.pop();
//     twoSumTarget(sorted, target, res);
//   }
//   return Object.keys(res).map(str => {return str.split(",").map(el => {return parseInt(el);});});
// };

// const twoSumTarget = (sortedNums, target, res) => {
//   let i = 0;
//   let j = (sortedNums.length - 1);

//   while (i < j) {
//     if (sortedNums[i] + sortedNums[j] === target * -1) {
//       res[[sortedNums[i], sortedNums[j], target]] = true;
//       i--;
//       j--;
//     } else if (sortedNums[i] + sortedNums[j] > target * -1) {
//       j--;
//     } else {
//       i++;
//     }
//   }
// };



console.log(threeSum([-1, 0, 1, 2, -1, -4]));
