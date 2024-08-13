class Empleado{
    #salario
    constructor(nombre, apellido, cargo, salario){
        this.nombre=nombre
        this.apellido=apellido
        this.cargo=cargo
        this.#salario = salario
    }
    calcularSueldoNeto(){
        let prestaciones = 500000
        let sueldoNeto = this.#salario - prestaciones
        console.log(sueldoNeto);
    }
    mostrarDatos(){
        console.log(`El empleado ${this.nombre} ${this.apellido} su cargo es ${this.cargo} y su sueldo es de ${this.#salario}`);
    }
}

let ObjEmpleado = new Empleado("Richi", "Anaya", "Programador", 5000000);

ObjEmpleado.calcularSueldoNeto()
ObjEmpleado.mostrarDatos