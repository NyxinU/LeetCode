var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let map = {};
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    if (map[letter]) {
      while (arr[0] !== letter) {
        map[arr[0]] = false;
        arr.shift();
      }
      arr.shift();
      arr.push(letter);

    } else {
      map[letter] = true;
      arr.push(letter);
      if (arr.length > longest) { longest = arr.length; }
    }
  }
  return longest
};