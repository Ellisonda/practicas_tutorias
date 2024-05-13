// 1. Desarrolla una función en JavaScript llamada 'leapYear' que tome un año como argumento y devuelva true si es
// un año bisiesto y false si no lo es, siguiendo las reglas del calendario gregoriano.

function leapYear (year) {
    if(year != Number){ throw new Error `Introduce un numero`}
    else if (year % 4 === 0 && year % 100 ==0 || year % 400 ==0) {
        return true
    } else {
        return false
    }
}
// 2. Crea una función llamada 'clasificarTriangulo' que tome tres argumentos representando las longitudes de los lados
// de un triángulo y determine si es equilátero, isósceles o escaleno, imprimiendo el resultado por consola.

function clasificarTriangulo (lado1, lado2, lado3) {
    if(isNan(lado1) || isNan(lado2) || isNaN(lado3)){ throw new Error 'Uno de los parametros no es un numero'}
    else if(lado2<lado3 && lado1===lado2){ return 'Es un triangulo isosceles';}
    else if(lado1===lado2 && lado2===lado3) {return 'Es un triángulo equilatero';}
    else return 'Se trata de un triangulo escaleno';
}

// 3. Crea un programa que solicite al usuario dos números, realice la división del primero por el segundo y 
//muestre el cociente por consola. Asegúrate de manejar todos los casos para evitar errores.

function numeros (num1, num2) {
    if(num1 != Number || num2 != Number) throw new Error `Introduce un numero`

    const division = num1/num2;
    console.log(disivion)
}

// 4. Crea un programa que solicite al usuario ingresar una contraseña y luego verifique si cumple con los
// requisitos mínimos: al menos 8 caracteres, al menos una letra mayúscula y al menos un número.
// Informa al usuario si la contraseña ingresada es válida o no.
function checkUpperCase (word) {
    return word === word.toUpperCase();
}
// function checkpassUpper (password) {
//     let eachWord = password.CharAt(i);
//     for(let i=0; i<password.length; i++){
//         if( checkUpperCase(eachWord)){ return true}
//         else {return false}
//     }
// }

//ESTA ES LA BUENA CON EXPRESIONES REGULARES
const minimo8Caracteres = contraseña.lenth>= 8;
const tieneMayusculas = /[A-Z]/.test(contraseña);
const tienesNumero = /\d/.test(contraseña);

if(minimo8Caracteres && tieneMayusculas && tienesNumero){
    console.log('Contraseña valida');
}else {
    console.log('controsaña valida');
}

// const checkNumb = (elem) => typeof elem === number; // ¿esto sería truthy?

// const passArr = password.split();
// const checkUpper = passArr.some(checkUpperCase);
// const checkPassNumb = passArr.some(checkNumb);

// function passRequired (password) {
//     if(password.length >= 8 && checkUpper && checkPassNumb) return 'Your pass is valid';
//     else return 'Your pass is not valid. Try usin some number, at least one character on capital and at least 8 characters.'
// }





// 5. Desarrolla un programa en JavaScript que calcule el Índice de Masa Corporal (IMC) de una persona. 
//El IMC se calcula utilizando la fórmula: IMC = peso / (altura^2), donde el peso se mide en kilogramos y 
//la altura en metros. Además informa al usuario sobre su estado de salud según el 
//IMC calculado teniendo en cuenta esta tabla: IMC < 18.5: "Bajo peso" || 18.5 ≤ IMC < 25: "Peso normal" ||25 ≤ IMC < 30: "Sobrepeso" ||IMC ≥ 30: "Obesidad"

//calculo el IMC


function saludUser () {
    const imc = function imc (peso, altura) {
        return peso/ Math.pow(altura, 2)
    };

    if(imc <18.5) return 'Estas una mijita delgado';
    else if(18.5<= imc < 25) return  ' Estas de lujo';
    else if (25<= img <30) return 'Dejate de papas y muevete un poco';
    else return 'Vamos para la eliptica gaxon'.
}
saludUser();


// 6. Desarrolla un programa en JavaScript que liste todos los números primos hasta un número dado por el usuario.

function numPrimos (num) {

    if(num != Number) throw new Error `Introduce un numero`

    const allNumbers = [];
    
        for(let i=0; i<num; i++){
            if(i % i === 0 && i%1 === 0){
                allNumbers.push(num)
            }
        }
    
}
numPrimos();


// 7. Crea una función que convierta temperaturas entre Celsius y Fahrenheit.



function conversorToFareng (num) {
    const celsiusToFaren = num*32;
    const farenToCelsius = num/32;
    console.log(` ${num} grados Celsius son ${celsiusToFaren} grados Farenheit`)
    console.log(` ${num} grados Farenheit son ${farenToCelsius} grados Celsius`)

}

