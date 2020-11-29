//Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.

let mes = 'hola';

if(mes == 'enero' || mes == 'marzo' || mes == 'mayo' || mes == 'julio' || mes == 'agosto' || mes == 'octubre' || mes == 'diciembre'){
  console.log('Tiene 31 días');
}else if(mes == 'abril' || mes == 'junio' || mes == 'septiembre' || mes == 'noviembre'){
  console.log('Tiene 30 días')
}else if (mes == 'febrero'){
  console.log('Tiene 28 días');
}else{
  console.log('No ingresaste un mes');
}