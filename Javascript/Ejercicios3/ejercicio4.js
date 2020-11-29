/* Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.

Ejemplo:

const arr = [1,2,3,2,3,4,1] // 2,3,1 */

function findDuplicates(arr) {
  const items = []
  const dup = []
  
  for (let i = 0; i < arr.length; i++) {
    const actual = arr[i]
    if (items.includes(actual) && !dup.includes(actual)) {
      dup.push(actual)
    } else {
      items.push(actual)
    }
  }
  
  return dup
}

console.log(findDuplicates([1,2,3,2,3,4,1]));