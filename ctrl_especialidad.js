class ControlEspecialidad {
    constructor() {
        this.listaEspecialidad = [];
    }

    adicionar_Especialidad(especialidad) {
        this.listaEspecialidad.push(especialidad);
    }

    ver_Especialidad(){
        console.log(this.listaEspecialidad);
    }

    eliminar(id) {
        const indiceEspecialidad = this.listaEspecialidad.findIndex(especialidad => especialidad.id === id);

        if (indiceEspecialidad !== -1) {
            this.listaEspecialidad.splice(indiceEspecialidad, 1);
        } else {
            console.log("No se encontró un usuario con el ID ${id}");
        }
    }

    obtenerListaEspecialidades(){
        return this.listaEspecialidad;
    }

}