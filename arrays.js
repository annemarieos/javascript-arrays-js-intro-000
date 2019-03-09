var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = 1`foo`]

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

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.push(candyString)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index) {
  return(chocolateBars[2])
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(candyString)
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1)
  chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
