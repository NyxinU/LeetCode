var trap = function (height) {
  let maxs = [];
  let water = 0;

  for (let i = 0; i < height.length; i++) {
    if(height[i - 1] < height[i] && height[i + 1] < height[i]) maxs.push(i);
  }

  let i = 0;
  let j = 1;

  // while (j < maxs.length) {
  //   if (height.maxs.j)
  // };

  console.log(height.maxs[i])
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));