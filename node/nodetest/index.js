const fs = require('fs');

const dataPerson = require('./person.js');


fs.writeFile('person.text', dataPerson.person.name, () => {
  const name = dataPerson.person.name;
  const age = dataPerson.person.age;
  console.log(`Hola, soy ${name} y tengo ${age}`)
})






