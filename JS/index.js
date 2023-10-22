

const URL = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/ema"
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let fecha = document.getElementById('fecha')


function obtenerDatos() {
    fetch(URL)
        .then(resp => resp.json())
        .then(data => console.log(data))
}

let btn = document.getElementById('enviar')
btn.addEventListener("click", postearDatos)

function postearDatos() {
    console.log("hiciste click");
    fetch(URL, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
            nombre: nombre.value,
            apellido: apellido.value,
            fecha: fecha.value
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            obtenerDatos()
        })
        .catch(error => console.error("Error en la solicitud:", error));
}


obtenerDatos();