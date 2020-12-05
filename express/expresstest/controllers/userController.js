class userController {

  //Utilizando Express crear una ruta que reciba como parametro nuestro nombre y lo muestre en pantalla. 
  //Pasarle por query nuestra edad y mostrarla también
  getUser(req, res){
    res.send(`Hola usuario ${req.params.name} tenes ${req.query.age}`);
  }

  //Utilizando Express crear una ruta que reciba como parámetro un número y nos muestre en pantalla el mismo número multiplicado por 2
  getMultiplication(req, res){
    const number = Number(req.params.number * 2);
    res.send(`${number}`);
  }

  //Utilizando Express crear una ruta que reciba como parámetro una palabra, y nos devuelva en pantalla si la misma es o no un palíndromo
  getPalindromo(req, res){
    let word = req.params.word.toLowerCase();
    let palindromo = word.split('').reverse().join('');

    if(word == palindromo){
      res.send(`${req.params.word} es palíndromo ya que al revés se lee ${palindromo}`)
    }else{
      res.send(`${req.params.word} NO es palíndromo ya que al revés se lee ${palindromo}`)
    }
  }
}


module.exports = userController;