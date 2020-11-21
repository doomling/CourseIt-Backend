//Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin interés según el siguiente criterio.

//Mastercard – hasta 6 cuotas s/interés
//Visa – hasta 9 cuotas s/interés
//Amex – hasta 3 cuotas sin interés
//Todas las demás - 1 cuota sin interés

let card = 'Mastercard';

if(card == 'Mastercard'){
  console.log('Hasta 6 cuotas sin interés');
}else if(card == 'Visa'){
  console.log('Hasta 9 cuotas sin interés');
}else if(card == 'Amex'){
  console.log('Hasta 3 cuotas sin interés');
}else{
  console.log('1 cuota sin interés')
}