/* Queremos hacer que la función vowelCounter retorne la cantidad de vocales que tiene el parámetro 'str'

function vowelCounter(str) {
  
}

const vowelsJuani = vowelCounter('juani')
console.log(vowelsJuani)

const vowelsCourseIt = vowelCounter('courseit')
console.log(vowelsCourseIt) */

function vowelCounter(str) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
      count++
    }
  }
  return count;
}

