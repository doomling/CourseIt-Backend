//Dada una variable "y" que puede contener un número de 1 a 7, determinar a que día de la semana corresponde. Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).
  let y = 8;

  if (y == 1){
    console.log('lunes');
  }else if (y == 2){
    console.log('martes');
  }else if (y == 3){
    console.log('miércoles');
  }else if (y== 4){
    console.log('jueves');
  }else if (y == 5){
    console.log('viernes');
  }else if (y == 6){
    console.log('sábado');
  }else if (y == 7){
    console.log('domingo');
  }else{
    console.log('No existe día para ese número');
  }