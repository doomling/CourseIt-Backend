/* Queremos hacer que la función vowelCounter retorne la cantidad de vocales que tiene el array 'arr'

function vowelCounter(arr) {
  
}

const firstArr = vowelCounter(['a','b','c','d','e'])
console.log(firstArr)

const secondArr = vowelCounter(['c', 'o', 'u', 'r', 's', 'e', 'i', 't'])
console.log(secondArr) */

function vowelCounter(arr){
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
      count++;
    }
  }
  return count;
}

const secondArr = vowelCounter(['c', 'o', 'u', 'r', 's', 'e', 'i', 't'])
console.log(secondArr)