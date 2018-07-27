var longestPalindrome = function (s) {
  let longest = s.length > 0 ? `${s[0]}` : "";
  let pointer = 0;

  while (pointer < s.length) {
    console.log([pointer, longest])
    let rP = pointer - 1;
    let fP = pointer + 1;

    if (s[rP] === s[fP] && fP - rP >= longest.length) {
      longest = s.slice(rP, fP + 1);
    }

    if(s[pointer] === s[fP]) {
      fP++;
    }

    while (s[rP] === s[fP] && s[rP] !== undefined && s[fP] !== undefined) {
      rP--;
      fP++;
    }

    rP++;
    fP--;

    if (fP - rP >= longest.length) {
      longest = s.slice(rP, fP + 1);
    }
    pointer++;
  }

  return longest;
};

console.log(longestPalindrome("eeeeeeeee"));