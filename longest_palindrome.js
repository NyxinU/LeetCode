var longestPalindrome = function (s) {
  let longest = s.length === 0 ? "" : s[0];
  let p1 = 0;


  while (p1 < s.length) {
    let odd = palinFinder(s, p1 - 1, p1 + 1);
    let even = palinFinder(s, p1, p1 + 1);
    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
    p1++;
  }
  return longest;
};

var palinFinder = (s, bp, fp) => {
  let longest = s[bp] === s[fp] ? s.slice(bp, fp + 1) : "";

  while (s[bp] === s[fp] && s[bp] !== undefined && s[fp] !== undefined) {
    bp--;
    fp++;
  }

  bp++;
  fp--;

  if (fp - bp > longest.length) {
    longest = s.slice(bp, fp + 1);
  }

  return longest;
};

console.log(longestPalindrome("eeeeeeeee"));