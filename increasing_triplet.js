var increasingTriplet = function (nums) {
  let p1 = 0;
  let p2 = 1;
  let p3 = 2;

  while (p3 < nums.length) {
    if (nums[p2] < nums[p1]) {
      p1 = p2;
      p2 = p1 + 1;
      p3 = p2 + 1;
    }

    if (nums[p3] < nums[p2]) {
      p2 = p3;
      p3 = p2 + 1;
    }

    if (nums[p1] < nums[p2] && nums[p2] < nums[p3]) {
      return true;
    }
    p3++;
  }
  return false;
};