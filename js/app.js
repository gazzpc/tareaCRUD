// para poder hacer un crud necesitamos una Estructura de Datos
// array y los objetos literales

const miArray = [];

// para agregar un string al array hago 
miArray.push('Hola 1'); //esto es una Create
miArray.push('Hola 2'); //esto es una Create
miArray.push('Hola 3'); //esto es una Create
miArray.push('Hola 4'); //esto es una Create
miArray.push('Hola 5'); //esto es una Create
miArray.push('Hola 6'); //esto es una Create
// console.log(miArray[0]); esto es un Read, pero aqui es solo un Elemento

function control (element, x){
    console.log(element);
}
//la "x" de la función es la posicion del element del array
miArray.forEach(control);
//siempre adentro del forEach va una funcion, no un elemento

miArray.forEach((el,i) => {
    console.log(el,i);
});
//antes tengo que saber que elemento le quiero hacer un update
miArray[3] = "Pepe";

miArray.forEach((el, i) => {
    console.log(el, i);
});

//delete
//antes tengo que saber que elemento quiero eliminar
miArray.splice(5,1);

miArray.forEach((el, i) => {
    console.log(el, i);
});