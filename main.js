document.getElementById('saveButton').addEventListener('click', ()=>{
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput){
        console.error('Los elementos del formulario no existen');
        return;
    }
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)){
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        dispalyData();
    } else {
        alert ('Por favor, ingresa un nombre valido y una edad numetica.');
    }
});

function dispalyData(){
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age){
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
        outputDiv.textContent = `No hay datos almacenados.`;
    }
}

/* Al cargar la pagina mostrar los datos almacenados */
window.onload = dispalyData;

/* Contador de interacciones en session storage */
if (!sessionStorage.getItem('interactionCount')){
    sessionStorage.setItem('interactionCount', 0);
}

/* Actualizar contador de interacciones */
function updateInteracionCount(){
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('inreactionCount', count);
    consol.log(`Interacciones en esta sesion: ${count}`);
}

/* Asignar eventos al contador */
document.getElementById('saveButton').addEventListener('click', updateInteracionCount);
document.getElementById('clearButton').addEventListener('click', updateInteracionCount);

/* Event para limpiar los daos del local storage */
document.getElementById('clearButton').addEventListener('click',()=>{
    localStorage.clear();
    dispalyData();
});