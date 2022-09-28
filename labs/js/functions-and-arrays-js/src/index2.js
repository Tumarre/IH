// Marianos sum function
function sum(numbers) {
  return numbers.reduce((sum, a) => {
    typeof sum === "string"
      ? (sum = parseInt(sum) || sum.length)
      : typeof sum === "boolean"
      ? (sum = sum ? 1 : 0)
      : (sum = sum);
    typeof a === "string"
      ? (a = parseInt(a) || a.length)
      : typeof a === "boolean"
      ? (a = a ? 1 : 0)
      : (a = a);
    return sum + a;
  }, 0);
}

// Bogdans Sum Function
function sum(mixedArray) {
  return mixedArray.reduce((totalSum, currentValue) => {
    if (typeof currentValue === "boolean") {
      return currentValue === true ? totalSum + 1 : totalSum + 0;
    } else if (typeof currentValue === "string") {
      return totalSum + currentValue.length;
    }
    return totalSum + currentValue;
  }, 0);
}
