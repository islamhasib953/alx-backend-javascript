export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx of array) {
    let value = array[idx];
    arr.push(appendString + value);
  }

  return arr;
}
