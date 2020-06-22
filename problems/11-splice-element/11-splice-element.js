/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  return someArr.splice(0, index) // split at index given
}

let myArr = ['J', 'A', 'Z', 1, 2, 3]

//note that splice also re-indexes the array

console.log(spliceElement(myArr,2));
