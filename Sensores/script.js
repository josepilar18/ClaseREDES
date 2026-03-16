// CREDENCIALES

let usuarioCorrecto = "pilar";
let passwordCorrecta = "1234";



// LOGIN

function login(){

let user = document.getElementById("usuario").value;
let pass = document.getElementById("password").value;

if(user == usuarioCorrecto && pass == passwordCorrecta){

document.getElementById("login").style.display="none";
document.getElementById("sistema").style.display="block";

}
else{

document.getElementById("error").innerText="Usuario o contraseña incorrectos";

}

}



// SENSOR HUMEDAD

function actualizarHumedad(){

let valor = document.getElementById("humedad").value;

document.getElementById("valorHumedad").innerText = valor;

document.getElementById("humedadManual").value = valor;

let led = document.getElementById("ledHumedad");

if(valor <= 8){

led.style.background="red";

}
else{

led.style.background="green";

}

}



// HUMEDAD MANUAL

function actualizarHumedadManual(){

let valor = document.getElementById("humedadManual").value;

document.getElementById("humedad").value = valor;

actualizarHumedad();

}



// SENSOR PROXIMIDAD

function actualizarProximidad(){

let valor = document.getElementById("proximidad").value;

document.getElementById("valorProx").innerText = valor;

document.getElementById("proxManual").value = valor;

let led = document.getElementById("ledProx");


if(valor <= 20){

led.style.background="red";

}
else if(valor <= 50){

led.style.background="yellow";

}
else{

led.style.background="green";

}

}



// PROXIMIDAD MANUAL

function actualizarProximidadManual(){

let valor = document.getElementById("proxManual").value;

document.getElementById("proximidad").value = valor;

actualizarProximidad();

}
