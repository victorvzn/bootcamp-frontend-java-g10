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