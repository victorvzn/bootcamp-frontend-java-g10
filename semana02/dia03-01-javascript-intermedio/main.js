// Tipos de datos no primitivos (Arrays, Objects)

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de datos: cadenas, números, booleans, null, undefined, arrays, objects, etc.

const arregloVacio = []
const listaDeNombres = ['Victor', 'Liliana', 'Marcial', 'Diego']
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [6, 7, 8]]
const listaConFunciones = [() => { console.log('Hola fn')}]

console.log(arregloVacio)
console.log(listaDeNombres)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // undefined
console.log(listaDeValores[8][1]) // 7

// Escritura en un arreglo

listaDeNombres[2] = 'Paul'
listaDeNombres[0] = 9999

console.log(listaDeNombres)

listaConFunciones[0]()

// Insertar nuevos elementos al final del arreglo

listaDeNombres.push('Javascript')

console.log(listaDeNombres)

// Remover elementos del final del arreglo

listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

const arr = [...listaDeNombres]

console.log(arr.splice(1, 0, 'HTML'))
console.log(arr)
console.log(listaDeNombres)

// Eliminar un elemento

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Otras funciones: slice (Investiguen)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// Split y join para cadenas

console.log('frutas'.split(''))
console.log('frutas'.split('').join(''))


// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, etc)

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean(true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const resultado = languages.filter(
  function (language, index, arregloOriginal) {
    // return language === 'java'
    // return language === 'python'
    return language.toLowerCase().includes('c')
  }
)

console.log(resultado)
console.log(languages)

// Método MAP, devuelve un arreglo modifica pasandole una función

const nombresConTitulo = languages.map(
  function (language) {
    // return 'Hola'
    return language + '*'
  }
)

console.log(nombresConTitulo)
console.log(languages)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta el arreglo original. Ordena cadenas de texto.

const ordenandoLanguages = [...languages].sort()

console.log(ordenandoLanguages)
console.log(languages)

const edades = [25, 12, 10, 89, 32, 81, 3]

const ordenandoEdadesAsc = [...edades].sort((a, b) => a - b) // Ordenamiento ASC
const ordenandoEdadesDesc = [...edades].sort((a, b) => b - a) // Ordenamiento DESC

console.log(ordenandoEdadesAsc)
console.log(ordenandoEdadesDesc)
console.log(edades)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

const miarreglo = []

languages.forEach(
  function (language, index) {
    if (index > 3) {
      miarreglo.push('hola--' + language)
    }
  }
)

console.log(miarreglo)

// Método REDUCE, nos ayuda a tomar los valores de un arreglo y sumarlos

const numeros = [3, 40, 100, 7, 50]

const sumatoria = numeros.reduce(
  function (accumulador, valorActual) {
    return accumulador + valorActual
  }, 0)

console.log(sumatoria)

let acumulador = 0

for (let i = 0; i < numeros.length; i++) {
  acumulador = acumulador + numeros[i]
}

console.log(acumulador)
