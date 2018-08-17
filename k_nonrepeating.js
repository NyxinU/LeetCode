const firstKNonRepeating = (str, k) => {
  let res = [];
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) res.push(key);
    if (res.length === k) break; 
  }

  console.log(res);
};


let str = "ABCDBAGHCHFAC";
let k = 3;
firstKNonRepeating(str, k); // => D G F