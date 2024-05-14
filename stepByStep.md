# Quiz
- ¿Qué es JavaScript?
- ¿Qué tipo de datos acepta javascript?
- ¿Qué diferencias existen entre var, let y const? https://www.w3schools.com/js/js_const.asp
- EXPLICAR HOISTING
- ¿Que son las variables de ámbito global y local?
- ¿Cuales son los operadores en javascript? https://www.w3schools.com/js/js_operators.asp -  
- Diferencia entre =, == y ===
- ¿Cual es la diferencia entre null y undefined?
- ¿Qué es el type coercion?
- ¿Qué es una funcion y como se define?

# Clasificación de triangulos

1. Definimos la funcion llamandola clasificarTriangulo y tomará tres argumentos: lado1, lado2 y lado3. Estos argumentos representan los tres lados de un triangulo.
2. Comenzamos con una declaración `if` que verifica si todos los lados del triangulo son iguales. Utilizamos el operador de igualdad estricta `===` para comparar `lado1` con `lado2` y `lado2` con `lado3`. Si ambas comprobaciones son verdaderas, significa que todos los lados son iguales.
3. Si la condicion es verdadera se imprimirá por un console.log el mensaje "El triangulo es equilatero".
4. Si la condicion del `if` anterior no se cumple (es decir, no todos sus lados son iguales) entonces se verifica la siguiente condicion con un `else if`. Esta condición verifica si al menos dos lados del triángulo son iguales. Utilizamos el operador `||` (OR), que devuelve verdadero si al menos una de las condiciones es verdadera.
5. Si ninguna de las condiciones anteriores es verdadera, entonces se ejecuta el código dentro del bloque `else`. Esto significa que el triángulo no es ni equilatero ni isosceles.

# División de números

1. Se utiliza prompt para mostrar un cuadro de diálogo que solicita al usuario que ingrese el primer número. La función prompt devuelve una cadena de texto, por lo que se utiliza `parseInt` para convertir esa cadena en un número entero. El resultado se almacena en la variable `num1`.
2. Se solicita al usuario que ingrese el segundo número. El resultado se almacena en la variable num2.
3. Se inicia una estructura de control `if` que verifica si `num2` es diferente de cero (!== 0). Esto es importante porque la división por cero en matemáticas no está definida y resultaría en un error.
4. Si `num2` es diferente de cero, se realiza la división de `num1` entre `num2`, y el resultado se almacena en la variable cociente. Luego, se utiliza console.log para mostrar el resultado en la consola.
5. Si `num2` es igual a cero, se ejecuta el bloque de código dentro del else, que muestra un mensaje de error en la consola indicando que no se puede dividir por cero.

# Verificador de contraseñas

1. A través de un prompt para m ostrar un cuadro de dialogo que solicita al usuario que ingrese su contraseña. La contraseña ingresada por el usuario se almacena en la variable `contraseña`.
2. Aquí, se verifica si la longitud de la contraseña ingresada es mayor o igual a 8 caracteres. Si es así, la variable `minimo8Caracteres` se establece en `true`; de lo contrario, es `false`.
3. Esta línea utiliza una expresión regular para verificar si la contraseña contiene al menos una letra mayúscula. La expresión regular /[A-Z]/ busca cualquier letra mayúscula en la cadena de la contraseña. Si encuentra una, test devuelve `true`; de lo contrario, devuelve `false`.
4. Esta vez se verifica si la contraseña contiene al menos un número. La expresión regular /\\d/ busca cualquier dígito en la cadena de la contraseña. Si encuentra un dígito, test devuelve true; de lo contrario, devuelve false.
5. Este bloque if verifica si todas las condiciones anteriores son verdaderas (minimo8Caracteres, tieneMayuscula, tieneNumero). Si todas son verdaderas, significa que la contraseña cumple con los requisitos (tener al menos 8 caracteres, incluir una letra mayúscula y un número). Si se cumplen estas condiciones, se imprime "Contraseña válida." en la consola.
6. Si alguna de las condiciones no se cumple, se ejecuta el bloque else, y se imprime "La contraseña no cumple con los requisitos." en la consola.

# Calculadora IMC

1. Solicitamos al usuario que ingrese su peso y altura. La función prompt muestra un cuadro de diálogo que pide al usuario que ingrese un valor. parseFloat convierte la entrada del usuario de una cadena a un número de punto flotante. Esto es necesario porque prompt devuelve una cadena, y queremos trabajar con números.
2. Se calcula el Índice de Masa Corporal (IMC) utilizando la fórmula peso / (altura * altura). El IMC es una medida de la grasa corporal basada en el peso y la altura de una persona. La operación ** 2 es una forma de elevar al cuadrado el valor de altura.
3. Se muestra el IMC calculado en la consola con dos decimales de precisión. toFixed(2) convierte el número a una cadena y formatea el resultado con dos decimales.
4. Estas líneas evalúan el IMC calculado y determinan el estado de salud de la persona basándose en los rangos de IMC. El IMC se utiliza para clasificar a las personas en categorías de peso.
5. Se utiliza una estructura de control if...else if...else para evaluar el IMC y determinar el estado de salud correspondiente. Cada condición verifica un rango específico de IMC y, si se cumple, imprime el estado de salud correspondiente en la consola.

# Lista de numeros primos

FUNCION ESPRIMO
1. creamos una funcion que determina si un numero dado es primo o no. Un numero primo es aquel que solo tiene dos divisores: 1 y él mismo.
2. Si el numero es mayor o igual a 1, la funcion devuelve false, ya que estos numeros no son primos.
3. Itera desde 2 hasta la raiz cuadrada del numero (esto se hace para optimizar el proceso, ya que un numero no puede tener un divisor mayor que su raiz cuadrada).
4. si encuentra algun divisot (es decir, si el numero es divisible por cualquier numero en este rango) devuelve false, indicando que el numero no es primo.
5. Si no encuentra ningun divisor, devuelve true, indicando que el numero es primo.

FUNCION LISTARPRIMOS
1. Esta funcion genera una lista de todos los numeros primos hasta un numero dado.
2. Inicializamos un array vacio llamado `primos`.
3. Ireta desde 2 hasta el número `hasta`
4. Para cada número en este rango, utiliza la funcion `esPrimo` para verificar si es primo
5. Si el número es primo, lo agrega al array `primos`
6. Al final, devuelve el array `primos` que contiene todos los numeros primos hasta el numero `hasta`

Despues de definir estas funciones, el código solicita al usuario que ingrese un número. Este número se pasa a la función `listarPrimos`, que genera la lista de números primos hasta ese número. Finalmente, se imprime por consola.

# Conversor celsius/farenheit

FUNCION celsiusToFarenheit(celsius)
1. Esta función toma un argumento `celsius`, que es la temperatura en grados Celsius.
2. La fórmula para convertir grados Celsius a Fahrenheit es `(celsius * 9/5) + 32.` 
3. La función devuelve el resultado de esta fórmula, que es la temperatura en grados Fahrenheit.

FUNCION fahrenheitToCelsius(fahrenheit)
1. Esta función toma un argumento `fahrenheit`, que es la temperatura en grados Fahrenheit.
2. La fórmula para convertir grados Fahrenheit a Celsius es `((fahrenheit - 32) * 5/9)`.
3. La función devuelve el resultado de esta fórmula, que es la temperatura en grados Celsius.

Despues definimos dos constantes con valores de temperatura en gracos Celsius y Fahrenheit. temperaturaCelsius se inicializa con el valor 25 y temperaturaFahrenheit con valor 77.
Se utilizan estas constantes para convertir entre Celsisus  y Fahrenheit utilizando las funciones definidas anteriormente