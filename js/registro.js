//Obteniendo datos del formulario
const form = document.querySelector('#registroPersonaje');
//Arreglo de Jedis inicializado como arreglo vacio
const personajesArreglo = []; 
//Manejamos el evento submit del formulario
form.addEventListener('submit', (event) => {
    //Evitamos el comportamiento del evento
    event.preventDefault();
    //Se almacena la informacion del formulario en un objeto de JS 
    const personaje={
        nombre: form.nombre.value,
        apellido:form.apellido.value,
        edad:form.edad.value,
        estado:form.estado.value
    };
    if (validarPersonaje(personaje)) {
        personajesArreglo.push(personaje);
        updatePersonajesList();
        //console.log(personaje);
        //console.log(setRole(personaje,1));
        //console.log(personajesArreglo);
        
    }else{
        event.stopPropagation();
        alert("Campos vacios, ingrese datos");
    }
    document.getElementById("#registroPersonaje").reset();
});

const setRole = (personaje,role) => {
    const roles = {
        5:"soldado",
        4:"cabo",
        3:"artillero",
        2:"bombardero",
        1:"general"
    }
    const validRole = roles[role];
    console.log(validRole);
    if (validRole){
        return {
            ...personaje, role:validRole
        }
    }else{
        return{
            ...personaje, role:"Desconocido"
        }
    }
};
const validarPersonaje=({nombre="",apellido="",edad=0,estado=""}) => nombre!=="Personaje" && apellido!=="" && edad!==0 && estado!=="";


const updatePersonajesList = () => {
    const personajesList = document.querySelector('#personajesList');
    personajesList.innerHTML = ''; // Limpiamos el contenido existente

    personajesArreglo.forEach(personaje => {
        const row = `
        <tr>
          <td>${personaje.nombre}</td>
          <td>${personaje.edad}</td>
          <td>${personaje.apellido}</td>
          <td>${personaje.estado}</td>
        </tr>
      `;

      personajesList.innerHTML += row;
    });
};

// const updatePersonajeList = () => {
//     const personajeList = document.querySelector('#personajesList');
//     personajeList.innerHTML = '';

//     personajesArreglo.forEach(personaje=>{
//         const row = document.createElement("tr");
    
//         const nameCell = document.createElement("td");
//         nameCell.textContent = personaje.nombre;
    
//         const lastNameCell = document.createElement("td");
//         lastNameCell.textContent = personaje.apellido;

//         const ageCell = document.createElement("td");
//         ageCell.textContent = personaje.edad;

//         const statusCell = document.createElement("td");
//         statusCell.textContent = personaje.estado;

//         row.appendChild(nameCell);
//         row.appendChild(lastNameCell);
//         row.appendChild(ageCell);
//         row.appendChild(statusCell);

//         personajeList.appendChild(row);
//     })
    
// }