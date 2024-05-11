// 1. Desarrolla una función en JavaScript llamada 'leapYear' que tome un año como argumento y devuelva true si es
// un año bisiesto y false si no lo es, siguiendo las reglas del calendario gregoriano.

function leapYear (year) {
    if(year != number) throw new Error `Introduce un numero`
    else if (year % 4 === 0) ? true: false;
}
// 2. Crea una función llamada 'clasificarTriangulo' que tome tres argumentos representando las longitudes de los lados
// de un triángulo y determine si es equilátero, isósceles o escaleno, imprimiendo el resultado por consola.

function clasificarTriangulo (lado1, lado2, lado3) {
    if(lado2<lado3 && lado1===lado2)return 'Es un triangulo isosceles';
    else if(lado1===lado2 && lado2===lado3) return 'Es un triángulo equilatero';
    else return 'Se trata de un triangulo escaleno'
}

// 3. Crea un programa que solicite al usuario dos números, realice la división del primero por el segundo y 
//muestre el cociente por consola. Asegúrate de manejar todos los casos para evitar errores.

function numeros (num1, num2) {
    if(num1 != number || num2 != number) throw new Error `Introduce un numero`

    const division = num1/num2;
    console.log(disivion)
}

// 4. Crea un programa que solicite al usuario ingresar una contraseña y luego verifique si cumple con los
// requisitos mínimos: al menos 8 caracteres, al menos una letra mayúscula y al menos un número. Informa al usuario si la contraseña ingresada es válida o no.



// 5. Desarrolla un programa en JavaScript que calcule el Índice de Masa Corporal (IMC) de una persona. 
//El IMC se calcula utilizando la fórmula: IMC = peso / (altura^2), donde el peso se mide en kilogramos y 
//la altura en metros. Además informa al usuario sobre su estado de salud según el 
//IMC calculado teniendo en cuenta esta tabla: IMC < 18.5: "Bajo peso" || 18.5 ≤ IMC < 25: "Peso normal" ||25 ≤ IMC < 30: "Sobrepeso" ||IMC ≥ 30: "Obesidad"

// 6. Desarrolla un programa en JavaScript que liste todos los números primos hasta un número dado por el usuario.

// 7. Crea una función que convierta temperaturas entre Celsius y Fahrenheit.
