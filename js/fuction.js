function crearCarta(){
    var genero="";
    var motivo= "";
    var a=document.getElementById("rut").value;
    var b=document.getElementById("apeP").value;
    var c=document.getElementById("apeM").value;
    var d=document.getElementById("nom").value;
    var e=document.getElementById("edad").value;
    var f=document.getElementById("correo").value;
    var g=document.getElementById("celular").value;
    var h=document.getElementById("profesion").value;
    var i=document.getElementById("genero").value;
    var j=document.getElementById("motivo").value;

    if(i===1){
        genero='Hombre';
    }
    if(i===2){
        genero='Mujer';
    }
    if(i===3){
        genero='Otro';
    }



    if(j===1){
        motivo='Mejorar CV';
    }
    if(j===2){
        motivo='Mejorar Experiencia en área laboral';
    }
    if(j===3){
        motivo='Trabajo estable';
    }
    if(j===4){
        motivo='Otro';
    }


    var cadena= "Rut: " + a + "\n" + "Ape. Paterno: " + b + 
    "\n" + "Ap. Materno: " + c +
    "\n" + "Nombre: " + d  +
    "\n" + "Edad: " + e +
    "\n" + "Correo: " + f + 
    "\n" + "Celular: " + g +
    "\n" + "Profesion: " + h +
    "\n" + "Género: " + genero +
    "\n" + "Motivo: " +motivo;
    document.getElementById("carta").value=cadena;
};