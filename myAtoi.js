var myAtoi = function (str) {
  let res = ""
  let i = 0;

  while (str[i] === ' ') {
    i++;
  }

  if (str[i] === "-") {
    i++;
    res = "-"
  } else if (str[i] === "+") {
    i++;
  }

  while (i < str.length) {
    if (isNaN(parseInt(str[i]))) {
      break;
    } else {
      res = res.concat(str[i])
    }
    i++;
  }

  if (res === "-" || res.length === 0) {
    return 0
  }

  res = parseInt(res)

  if (res < -2147483648) {
    return -2147483648
  } else if (res > 2147483647) {
    return 2147483647
  } else {
    return res
  }

};