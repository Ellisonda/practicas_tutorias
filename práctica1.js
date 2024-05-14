// año bisiesto --> un año es bisiesto si es divisible por 4 pero no por 100, excepto si también es divisible por 400.

function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

// clasificación triángulos --> función que clasificará a un triángulo según sus lados.

function clasificarTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles.");
  } else {
    console.log("El triángulo es escaleno.");
  }
}

// división de números

const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));

if (num2 !== 0) {
  const cociente = num1 / num2;
  console.log(`El cociente es: ${cociente}`);
} else {
  console.log("Error: No se puede dividir por cero");
}

// booleanos --> verificación contraseña

const contraseña = prompt("Ingresa tu contraseña:");

const minimo8Caracteres = contraseña.length >= 8;
const tieneMayuscula = /[A-Z]/.test(contraseña);
const tieneNumero = /\d/.test(contraseña);

if (minimo8Caracteres && tieneMayuscula && tieneNumero) {
  console.log("Contraseña válida.");
} else {
  console.log("La contraseña no cumple con los requisitos.");
}

// calculadora IMC

const peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
const altura = parseFloat(prompt("Ingresa tu altura en metros:"));

const imc = peso / altura ** 2;

console.log(`Tu IMC es: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Estado de salud: Bajo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Estado de salud: Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Estado de salud: Sobrepeso");
} else {
  console.log("Estado de salud: Obesidad");
}

// lista de todos los numeros primos hasta un número dado

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function listarPrimos(hasta) {
  const primos = [];
  for (let i = 2; i <= hasta; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

const hasta = parseInt(
  prompt(
    "Ingresa un número para listar todos los números primos hasta ese número:"
  )
);

const primosHastaNumero = listarPrimos(hasta);
console.log(`Números primos hasta ${hasta}:`);
console.log(primosHastaNumero);

// conversor celsius/farenheit y viceversa

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
console.log(
  `${temperaturaCelsius} grados Celsius son ${temperaturaFahrenheit.toFixed(
    2
  )} grados Fahrenheit.`
);

const temperaturaFahrenheit2 = 77;
const temperaturaCelsius2 = fahrenheitToCelsius(temperaturaFahrenheit2);
console.log(
  `${temperaturaFahrenheit2} grados Fahrenheit son ${temperaturaCelsius2.toFixed(
    2
  )} grados Celsius.`
);
