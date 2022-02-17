const AND = ["a", "t", "c", "g"];
let salida,
  salidaConsole = "";
let contadorCadena = 0;
let contadorRepetido = 0;
let medidorRepetidos = 0;
let ultimaLetra;
let topeRepetidas = 2;
let randon;
let numNoRepetir;
function noRepetir(num) {
  let randonNuevo = Math.floor(Math.random() * 3);
  if (randonNuevo === num) {
    randonNuevo = noRepetir(num);
  }
  return randonNuevo;
}

for (let index = 1; index <= 200; index++) {
  if (index === 1) {
  } else {
    ultimaLetra = salida;
  }

  randon = Math.floor(Math.random() * 3);
  if (randon === numNoRepetir || medidorRepetidos >= topeRepetidas) {
    randon = noRepetir(numNoRepetir);
  }
  salida = AND[Number(randon)];
  salidaConsole += salida;
  contadorCadena++;
  if (index % 60 === 0) {
    console.log("LOCO");
    salidaConsole += "\n";
    contadorCadena++;
  }
  if (ultimaLetra === salida) {
    contadorRepetido++;
    medidorRepetidos++;
  }
  if (medidorRepetidos === topeRepetidas) {
    medidorRepetidos = 0;
    numNoRepetir = randon;
    if (topeRepetidas == 2 || topeRepetidas == 3 || topeRepetidas == 3) {
      topeRepetidas++;
    } else {
      topeRepetidas = 2;
    }
  }
}
console.log("Ultima Letra: ", salida);
console.log("Cadena Completa: \n", salidaConsole);
console.log("Numero de Repeticiones ", contadorRepetido);
console.log("Cuantas veces se retipio la ultima letra: ", medidorRepetidos);
console.log("Maxima de veces que debia repetirse: ", topeRepetidas);
console.log("Cantidad de cantidad Final: ", contadorCadena);
console.log(salidaConsole[0]);
