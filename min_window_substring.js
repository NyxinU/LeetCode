var minWindow = function (s, t) {
  const lettersInT = {};
  const indices = [];
  let minAndMax = [];
  let res = '';
  
  for (let i = 0; i < t.length; i++) {
    let el = t[i];
    lettersInT[el] = i;
  }

  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (lettersInT[el]) {
      indices[lettersInT[el]] = el;
    }    
  }
  console.log(indices);
};


const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s,t));