/* exported setValue */
// 1. define a function with three parameter
// 2. use object accessor to add value in existing object property
// 3. return value

function setValue(object, key, value) {
  var objValue = object;
  objValue[key] = value;
}
