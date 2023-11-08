const listaElementos = [];
//tambien puede llamarse e solamente, pero en html si o si tiene que ir el "event"
function createElement(valor){
    listaElementos.push(valor);
}

function updateElement(posicion) {
    console.log(posicion);
}

function deleteElement(posicion) {} //aca puedo usar el splice y despues de borrar tengo que mostrar el array con el readElement()


function readElement() {
        const listado = document.getElementById("listado");
        listado.innerHTML = "";
        listaElementos.forEach((element, index) => {
            listado.innerHTML += `
            <li>${element} <button onclick="updateElement(${index})">Editar</button> <button>Eliminar</button> </li>
            `;
        });
    }


function manejarFormulario(event){
    event.preventDefault();
    //aca puedo acceder al input
   const inputValor = document.getElementById('valor')
   createElement(inputValor.value);
   inputValor.value ="";
    readElement();
}
