
    let lugar ;
    let fecha_hora ;
    let cantidad ;
    const reservas = [];  
    let Line; 
  

do{

    IngresoDatos();
    
    var next = confirm("¿Desea realizar otra reserva?");
    
}while( next == true )

PrintData();

function IngresoDatos(){

     lugar = prompt("Ingrese el establecimiento:");
     fecha_hora = prompt("Ingrese el dia y horario:");
     cantidad = prompt("Ingrese la cantidad de personas");

     Line = lugar + " " + fecha_hora  + " " + cantidad ;

    reservas.push(Line)

    alert("Reserva realizada");
    

}

function PrintData(){
   

   for(let index = 0 ; index < reservas.length ; index++)
    {
        document.write("<br/> " + reservas[index]);
    }
    

}