/*
Write function avg which calculates average of numbers in given list.
 */


find_average = array => {
  return array.reduce((total, amount) => total + amount) / array.length
}