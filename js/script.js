// Definir el arreglo de personas y oficios
const personas = [
    { nombre: "Silvia Ortíz", oficio: "Programador" },
    { nombre: "Jose González", oficio: "Diseñador" },
    { nombre: "Patricia Romero", oficio: "Cocinero" },
    { nombre: "Sandra Martínez", oficio: "Psicologo" },
    { nombre: "Ángeles López", oficio: "Médico" },
    { nombre: "Andrea Martín", oficio: "Ingeniero" },
    { nombre: "Ignacio Cruz    ", oficio: "Carpintero" },
    { nombre: "Pilar Gómez", oficio: "Arquitecto" },
    { nombre: "Teresa González", oficio: "Abogado" }
];

// Función para mostrar las personas y oficios en la página
function setPersonas() {
    const container = document.getElementById("personas-container");
    container.innerHTML = ""; 

    personas.forEach(persona => {
        const personaDiv = document.createElement("div");
        personaDiv.classList.add("persona-container");

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("persona-details");

        const nombreDiv = document.createElement("div");
        nombreDiv.classList.add("persona-name");
        nombreDiv.textContent = persona.nombre;
        detailsDiv.appendChild(nombreDiv);

        const jobDiv = document.createElement("div");
        jobDiv.classList.add("persona-job");
        jobDiv.textContent = persona.oficio;
        detailsDiv.appendChild(jobDiv);

        personaDiv.appendChild(detailsDiv);

        const contratarBtn = document.createElement("button");
        contratarBtn.textContent = "Contratar";
        contratarBtn.classList.add("contratar-btn");
        contratarBtn.addEventListener("click", () => contratarPersona(persona.nombre));
        personaDiv.appendChild(contratarBtn);

        container.appendChild(personaDiv);
    });
}

// Función para manejar el evento de clic en el botón "Contratar"
function contratarPersona(nombre) {
    console.log(`Contratado: ${nombre}`);
}

// Mostrar las personas al cargar la página
setPersonas();
