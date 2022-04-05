let fs = require("fs");

module.exports = moduloTareas = { //creamos un objeto para ser requerido por otro archivo
    archivo: "./tareas.json", //propiedad que guarda el nombre del archivo
    leerJSON : () => { //metodo que retorna el json parseado
        let tareasJson = fs.readFileSync("./tareas.json", "utf-8");
        return JSON.parse(tareasJson);
    },
    escribirJSON : (info) => {
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8"); //usa 3 parametros el archivo que quiero sobre escribir, lo que quiero escribir, el tipo de codificacion

    },
    agregarTarea : (titulo, estado) => {
        let tareasAnteriores = moduloTareas.leerJSON(); //array original
        
        let nuevaTarea = { //nuevo objeto para agregar
            titulo : titulo,
            estado: estado,
        }
        tareasAnteriores.push(nuevaTarea); //agrego el objeto al final del array

        moduloTareas.escribirJSON(tareasAnteriores); //reemplazo
    },
    leerPorEstado : (estado) => {
        let tareas = moduloTareas.leerJSON(); //array original
        return tareas.filter((element) => element.estado === estado ); //filtro el array
        
    }
}