let nombre;
let apellido;
let edad;
let añoNacio;



prompt("Digite su nombre");
prompt("Digite su apellido");
edad =parseInt (prompt("Digite su edad"));

function ObtenerEdad(a){
    console.log("Hola");
    return 2022 - a;

}

document.body.innerHTML = "<h3>El año en que nacio fue: "+ObtenerEdad(edad);+"</h3>"

console.log("Hola "+nombre+" "+apellido+" Usted nacio en el anio: "+ObtenerEdad(edad));


