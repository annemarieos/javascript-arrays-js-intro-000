var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var candyString =`foo`, 1

function addElementToBeginningOfArray(chocolateBars, candyString){
return [candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  return [...candyString, chocolateBars]
}
