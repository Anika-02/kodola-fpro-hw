const arr = [1, 9, 2, 8, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    const index = array.indexOf(item);
    index !== -1? array.splice(index, 1):  console.log('Element not found in array');
    console.log(array);
}
removeElement(arr, 7);