//Crear una funcion que reciba como parametro un numero entero. Esa funcion tiene que recorrer desde 0 hasta el numero recibido e imprimir en pantalla la palabra "Fizz" si el numero actual es multiplo de 3, "Buzz" si el numero actual es multiplo de 5 o "Fizzbuzz" si el numero actual es multiplo de 3 y 5. Si ninguna regla se cumple imprimir el numero.
//Ejemplo. 1 - 1 2 - 2 3 - Fizz 4 - 4 5 - Buzz 6 - Fizz 7 - 7 ... 15 - Fizzbuzz

function FizzBuzz(numero) {
            
  for (let i = 0; i <= numero; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz')
    }else {
        console.log(i);
    }
  }
}
console.log(FizzBuzz(15));