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

    obtenerListaEspecialidads(){
        return this.listaEspecialidad;
    }

    modificar(id, nNombre,nApellido,nCuenta,nClave,nEmail) {
        this.listaEspecialidad[id].id=id+1;
        this.listaEspecialidad[id].nombre=nNombre;
        this.listaEspecialidad[id].cuenta=nApellido;
        this.listaEspecialidad[id].rol=nCuenta;
        this.listaEspecialidad[id].clave=nClave;
        this.listaEspecialidad[id].email=nEmail;
    }

    eliminar(id) {
        const indiceEspecialidad = this.listaEspecialidad.findIndex(especialidad => especialidad.id === id);

        if (indiceEspecialidad !== -1) {
            this.listaEspecialidad.splice(indiceEspecialidad, 1);
        } else {
            console.log("No se encontró un usuario con el ID ${id}");
        }
    }
    
    static obtenerListaEspecialidads() {
        // let usuarios = [
        //     [1, "Juan", "Perez", "abc", "juan@gmail.com", "admin"],
        //     [2, "Lucas", "Mendez", "def", "lucas@gmail.com", "usuario"],
        //     [3, "Elena", "Paredes", "ghi", "elena@gmail.com", "usuario"],
        //     [4, "Margarita", "Loaiza", "jkl", "margarita@gmail.com", "admin"],
        //     [5, "Ale", "Gonzales", "frgs", "gonzalesfranz2019@gmail.com", "admin"]
        // ];

        // let listaUsuarios = [];

        // for (let i = 0; i < usuarios.length; i++) {
        //     let user = new Usuario(usuarios[i][0], usuarios[i][1], usuarios[i][2], usuarios[i][3], usuarios[i][4], usuarios[i][5]);
        //     listaUsuarios.push(user);
        // }

        //conexion a la base de datos
        return listaUsuarios;
    }

}