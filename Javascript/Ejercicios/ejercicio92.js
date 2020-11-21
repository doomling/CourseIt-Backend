//Crear una funcion que reciba como parametro un numero entero. Esa funcion tiene que recorrer desde 0 hasta el numero recibido e imprimir en pantalla la palabra "Fizz" si el numero actual es multiplo de 3, "Buzz" si el numero actual es multiplo de 5 o "Fizzbuzz" si el numero actual es multiplo de 3 y 5. Si ninguna regla se cumple imprimir el numero.

//Ejemplo. 1 - 1 2 - 2 3 - Fizz 4 - 4 5 - Buzz 6 - Fizz 7 - 7 ... 15 - Fizzbuzz

const num = 1;

for(let i = 0; i <= num; i++){
  
  if(num % 3 == 0 && num % 5 == 0){
    console.log(i + ' FizzBuzz');
  }else if(num % 3 == 0){
    console.log(i + ' Fizz')
  }else if(num % 5 == 0){
    console.log(i + ' Buzz')
  }else{
    console.log(num);
  }
  
}
