
let Line; 
var reservas = [];
let contador = 0; 

function add() {

localStorage.setItem("Cantidad Maxima", JSON.stringify(2));
IngresoDatos();
//PrintData();

}

function IngresoDatos() {

    contador = contador + 1 
    let max = localStorage.getItem("Cantidad Maxima");

if (contador <= max) {
    let lugar = document.getElementById("Nombre");
    let fecha_hora = document.getElementById("Horario");
    let cantidad = document.getElementById("Personas");
    Line = lugar.value + " el día " + fecha_hora.value  + " para " + cantidad.value + " personas ";
    reservas.push(Line)
    alert("Reserva realizada");
    
}else 

alert("Máximo Numero de reservas alcanzado");

}

function PrintData() {
   
    var reservas2 = [];
    var reserva; 
    reservas.forEach((reserva)=>{reservas2.push("<tr><td>"+reserva+"</td>")});
    var output = document.querySelector("#output tbody");
    output.innerHTML = reservas2;  

}

