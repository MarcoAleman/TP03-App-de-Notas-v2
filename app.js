const funciones = require("./funcionDeTareas");
const process = require("process");

let instruccion = process.argv[2];

if (instruccion) { //por si no pasa nada que no rompa
    instruccion = instruccion.toLowerCase();
}

switch(instruccion) {
    case "listar":
        let tareas = funciones.leerJSON(); //contiene la base de datos
        if (tareas.length === 0) { //Si el array esta vacio
            console.log("La lista de tareas está vacia");
        } else { //si tiene al menos un elemento
            console.log("------------------");
            console.log("LISTADO DE TAREAS");   
            console.log("------------------");
            
            tareas.forEach((elemento,index)=> {
                console.log(`Tarea ${index + 1} = Titulo: ${elemento.titulo} -/- Estado: ${elemento.estado}`)
                console.log("--------------------------------------------------------------")
            });
        }
        break;
    case "agregar":
        let titulo = process.argv[3];
        let estado = process.argv[4];

        if (titulo && estado) { //si existen titulo y estado
            funciones.agregarTarea(titulo, estado);
            console.log("Se ha agregado la tarea");
        } else {
            console.log("Debe pasar un titulo y un estado");
        }
        break;
    case "filtrar":

        let estadoFiltro = process.argv[3];

        if (estadoFiltro) { //por si no pasa nada, que no rompa
            estadoFiltro = estadoFiltro.toLowerCase();
        } else {
            console.log("Debe pasar un estado")
        }

        let tareasFiltro = funciones.leerPorEstado(estadoFiltro);

        if (estadoFiltro && tareasFiltro.length != 0) { //si existe el filtro y el array no esta vacio
            console.log(`-----------------------------------`)
            console.log(`-----------------------------------`)
            console.log(`Las tareas en estado ${estadoFiltro} son:`)
            console.log(`-----------------------------------`)
            tareasFiltro.forEach((elemento)=>{
                console.log(`Título: ${elemento.titulo}`)
                console.log(`-----------------------------------`)
            })
        } else if (estadoFiltro && tareasFiltro.length == 0) {
            console.log("No se encontraron tareas con ese estado")
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
        break;
    default:
        console.log("No entiendo que queres hacer");

}