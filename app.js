const LLAVES = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

// Functions ****************************************************************
function encriptar(message){
    /*let encryptedMessage = message.split("").map(function(caracter){
        return LLAVES[caracter] || caracter;
    }).join("");
    */
    let encryptedMessage = message;
    for (const key in LLAVES) {
        if (encryptedMessage.includes(key)) {
            encryptedMessage = encryptedMessage.replaceAll(key, LLAVES[key]);
        }
    }
    return encryptedMessage;
}

function desencriptar(message){
    let desencryptedMessage = message;
    for (const key in LLAVES) {
        if (desencryptedMessage.includes(key)) {
            desencryptedMessage = desencryptedMessage.replaceAll(LLAVES[key], key);
        }
    }
    return desencryptedMessage;
}

function comprobacionInput(input){
    if(contieneMayusculas(input)){
        return ["ERROR", "El input no debe contener letras mayúsculas"];
    }
    if(contieneCaracteresEspeciales(input)){
        return ["ERROR", "El input no debe contener caracteres especiales"];
    }
    if(contieneAcentos(input)){
        return ["ERROR", "El input no debe contener acentos en las vocales"];
    }
    if(esVacio(input)){
        return ["ERROR", "El input no debe estar vacío"];
    }
    return ["OK", ""];
}

function contieneMayusculas(input){
    // Comprobamos si el input contiene al menos una letra mayúscula.
    return input !== input.toLowerCase();
}
function contieneCaracteresEspeciales(input) {
    // Definimos una expresión regular que busca cualquier carácter especial.
    // Los caracteres especiales están dentro de los corchetes [].
    // La barra invertida \ se usa para escapar los caracteres especiales dentro de los corchetes.
    // La expresión regular busca uno o más caracteres especiales en el input.
    const expresionRegular = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;    
    // Usamos el método test() de la expresión regular para verificar si el input contiene algún carácter especial.
    // Este método devuelve true si encuentra al menos una coincidencia y false si no encuentra ninguna.
    return expresionRegular.test(input);
}
function contieneAcentos(input){
    // Definimos una expresión regular que busca cualquier vocal con tilde o diéresis.
    const expresionRegular = /[áéíóúü]+/;
    return expresionRegular.test(input);
}
function esVacio(input){
    return input === "";
}

function copiarMensaje(){
    //implementar la funcionalidad de copiar el mensaje encriptado al portapapeles

}

function txtOutputConTexto(){
    document.getElementById("txtOutput").style.display = "block";
    document.getElementById("imgDiv").style.display = "none";
    document.getElementById("h2ImgDiv").style.display = "block";
    document.getElementById("pImgDiv").style.display = "none";
    document.getElementById("btnCopiar").style.display = "block";
}
function txtOutputSinTexto(){
    document.getElementById("txtOutput").style.display = "none";
    document.getElementById("imgDiv").style.display = "block";
    document.getElementById("h2ImgDiv").style.display = "block";
    document.getElementById("pImgDiv").style.display = "block";
    document.getElementById("btnCopiar").style.display = "none";
}

// Listeners ****************************************************************
document.getElementById("txtInput").addEventListener("click", function(){
    // Al hacer click en el input, se borra el contenido del textArea.
    this.innerHTML = "";
    document.getElementById("alert").innerHTML = "";
});

document.getElementById("txtInput").addEventListener("dblclick", function(){
    // Al hacer click en el input, se borra el contenido del textArea.
    this.innerHTML = "";
    this.value = "";
    document.getElementById("alert").innerHTML = "";
});

document.getElementById("btnEncriptar").addEventListener("click", function(){
    let input = document.getElementById("txtInput").value; //se obtiene el valor del input
    let comprobacion = comprobacionInput(input); //se comprueba el input con la funcion comprobacionInput
    
    if(comprobacion[0] === "OK"){ // si cumple las comprobaciones se procede a encriptar
        document.getElementById("alert").innerHTML = "";

        // creando el textarea con el mensaje encriptado
        let output = document.createElement("textarea");
        output.id = "txtOutput";
        output.readOnly = true;
        output.autocapitalize = "none";
        output.spellcheck = false;
        output.autocomplete = "off";
        output.autocorrect = "off";
        output.innerHTML = encriptar(input); //se encipta el mensaje y se añade al textarea
        document.getElementById("divDesencryption").innerHTML = ""; //se borra el contenido del divEncrytion
        document.getElementById("divDesencryption").appendChild(output); //se añade el textarea al divDesencryption        

    } else { // si no cumple las comprobaciones se muestra el error de acuerdo a la comprobacion que incumple
        document.getElementById("alert").innerHTML = comprobacion[1];
        document.getElementById("txtOutput").innerHTML = "";
    }
});

document.getElementById("btnDesencriptar").addEventListener("click", function(){
    let input = document.getElementById("txtInput").value;
    let comprobacion = comprobacionInput(input);
    
    if(comprobacion[0] === "OK"){
        document.getElementById("alert").innerHTML = "";

        let output = document.createElement("textarea");
        output.id = "txtOutput";
        document.getElementById("divDesencryption").innerHTML = "";
        output.innerHTML = desencriptar(input);
        document.getElementById("divDesencryption").appendChild(output);

    } else {
        document.getElementById("alert").innerHTML = comprobacion[1];
        document.getElementById("txtOutput").style.display = "none";

    }
});

document.getElementById("btnCopiar").addEventListener("click", function(){
    txtOutputSinTexto();
});
document.getElementById("btnCopiar").addEventListener("dblclick", function(){
    txtOutputConTexto();
});




