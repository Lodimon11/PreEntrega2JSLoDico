// Continuacion del simulador de prestamos bancarios para la Pre Entrega 2.

class Clientes {
    constructor(nombre, apellido, dni, saldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.saldo = saldo;
    }
}

const clienteFacundo = new Clientes('Facundo', 'Lo Dico', 40253498, 1000);
const clienteFranco = new Clientes('Franco', 'Campaiola', 40253499, 2000);
const clienteJulian = new Clientes('Julian', 'Arnesino', 40253500, 3000);
const clienteEzequiel = new Clientes('Ezequiel', 'Jorge', 40253501, 4000);

const arrayClientes = [];

arrayClientes.push(clienteFacundo);
arrayClientes.push(clienteFranco);
arrayClientes.push(clienteJulian);
arrayClientes.push(clienteEzequiel);

console.log(arrayClientes);


// Menu de opciones:
function menu() {
    alert('Bienvenido a LodiBank');
    let opciones = parseInt(
    prompt(
        'Ingrese una opción: \n 1) Consulta de cliente \n 2) Solicitar un prestamo \n 3) Salir'
    )
    );
    return opciones;
}

// Function para consultar por alguno de los clientes creados:
function consultaCuenta() {
    let dni = parseInt(prompt('Ingrese el DNI de la cuenta: '));
    let cliente = arrayClientes.find((cliente) => cliente.dni === dni);
    console.log(cliente);
    alert(JSON.stringify(cliente));
}

// Function para simular un prestamo pidiendo nombre, monto y cuotas:
function prestamos() {
    let nombre = prompt(`¿Cual es tu nombre?`);
    let monto = parseInt(prompt(`¿De cuanto es el prestamo que queres acceder?`));
    let cuotas = parseInt(prompt(`¿En cuantas cuotas lo queres abonar (1,3,6,12,18,24)?`));
    let resultado = 0;
    let resultadototal = 0;
    
    if(cuotas === 1){
        resultado=((monto*10/100)+monto)/1;
        resultadototal=(resultado*1);
        alert(` Excelente ${nombre}, tu plan es de 1 cuota con un interés del 10%. El monto de tu cuota es: ${resultado.toFixed(2)} y en total vas a devolver: ${resultadototal.toFixed(2)}`);
    }
    else if(cuotas === 3){
        resultado=((monto*30/100)+monto)/3;
        resultadototal=(resultado*3);
        alert(`${nombre}, tu plan es de 3 cuotas con un interés del 30%. El monto de cada cuota es: ${resultado.toFixed(2)} y en total vas a devolver: ${resultadototal.toFixed(2)}`);
    }
    else if(cuotas === 6){
        resultado=((monto*40/100)+monto)/6;
        resultadototal=(resultado*6);
        alert(`Excelente ${nombre}, tu plan es de 6 cuotas con un interés del 40%. El monto de cada cuota es: ${resultado.toFixed(2)} y en total vas a devolver: ${resultadototal.toFixed(2)}`);
    }
    else if (cuotas === 12){
        resultado=((monto*50/100)+monto)/12;
        resultadototal=(resultado*12);
        alert(`Excelente ${nombre}, tu plan es de 12 cuotas con un interés del 50%. El monto de cada cuota es: ${resultado.toFixed(2)} y en total vas a devolver: ${resultadototal.toFixed(2)}`);
    }
    else if(cuotas === 18){
        resultado=((monto*60/100)+monto)/18;
        resultadototal=(resultado*18);
        alert(`Excelente ${nombre}, tu plan es de 18 cuotas con un interés del 60%. El monto de cada cuota es: ${resultado.toFixed(2)} y en total vas a devolver: ${resultadototal.toFixed(2)}`);
    }
    else if(cuotas === 24){
        resultado=((monto*120/100)+monto)/24;
        resultadototal=(resultado*24);
        alert(`Excelente ${nombre}, tu plan es de 24 cuotas con un interés del 120%. El monto de cada cuota es: ${resultado.toFixed(2)} y en total vas a devolver: ${resultadototal.toFixed(2)}`);
        }
    else {
        alert(`Ingresa un numero de cuotas valido`);
        }
    alert('Gracias por operar con LodiBank');
}

// Function para finalizar el programa:
function salir() {
    alert('Gracias por operar con LodiBank');
}

// Ejecutamos el programa en cuestion:
let opciones = menu();
switch (opciones) {
    case 1:
    consultaCuenta();
    break;
    case 2:
    prestamos();
    break;
    case 3:
    salir();
    break;
    default:
    alert('Opción incorrecta');
    break;
}