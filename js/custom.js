// Función que lee el contenido de un archivo y lo inserta en un elemento 
// HTML. Esta función se usará para cargar el menú y el pie de página. 
function cargarFragmento(idElemento, archivo) {
    fetch(archivo)
        .then(respuesta => respuesta.text())
        .then(contenido => {
            document.getElementById(idElemento).innerHTML = contenido;
        })
        .catch(error => console.error(`Error cargando ${archivo}:`, error));
}    


