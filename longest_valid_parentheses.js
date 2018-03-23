const longestValidParentheses = (s) => {
  let left = 0;
  let right = 0;
  let max = 0;

  const a = s.split('');

  // left scan
  a.forEach(el => {
    if (right > left) {
      right = 0;
      left = 0;
    }
    if (el === '(') {
      left++;
    } else {
      right ++;
    }
    if (left === right) {
      if (left * 2 > max ) {
        max = left * 2;
      }
    }
  });

  left = 0;
  right = 0;

  //right scan 
  for (let i = a.length - 1; i > 0; i--) {
    if (left > right) {
      left = 0;
      right = 0;
    }
    if (a[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      if (right * 2 > max) {
        max = right * 2;
      }
    }
  }
  return max;
};

console.log(longestValidParentheses("()(()"));