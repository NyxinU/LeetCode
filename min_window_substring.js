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
    if (lettersInT[el] || lettersInT[el] === 0) {
      let prevIndex = indices[lettersInT[el]];
      if (prevIndex || prevIndex === 0) {
        let indexOfPrev = minAndMax.indexOf(prevIndex);
        minAndMax = minAndMax.slice(0, indexOfPrev).concat(minAndMax.slice(indexOfPrev + 1, minAndMax.length));
      }
      indices[lettersInT[el]] = i;
      minAndMax.push(i);
      if (minAndMax.length === t.length) {
        if (res === '' || minAndMax[minAndMax.length - 1] - minAndMax[0] < res.length) {
          res = s.slice(minAndMax[0], minAndMax[minAndMax.length - 1] + 1);
        }
      }
    }
  }
  console.log(lettersInT);
  console.log(indices);
  console.log(minAndMax);
  return res;    
};

const s = "A";
const t = "A";
console.log(minWindow(s,t));