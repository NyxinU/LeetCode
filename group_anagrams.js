var groupAnagrams = function (strs) {
  const sorted = {}
  const res = []

  strs.forEach(str => {
    const sortedStr = str.split("").sort().join("")
    if (sorted[sortedStr]) {
      sorted[sortedStr].push(str)
    } else {
      sorted[sortedStr] = [str]
    }
  })

  return Object.values(sorted)

};