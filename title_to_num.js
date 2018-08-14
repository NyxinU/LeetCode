var titleToNumber = function (s) {
  let output = 0;
  let arr = s.split("")
  let length = s.length - 1

  for (let i = 0; i < s.length; i++) {
    output = output + (s[i].charCodeAt() - 64) * Math.pow(26, length)
    length--;
  }

  return output
};