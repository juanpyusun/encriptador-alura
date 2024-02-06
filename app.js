const LLAVES = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

function encriptar(){
    let mensaje = "";
    let input = document.getElementById("input").value; 
    return mensaje;
}

function desencriptar(){
    let mensaje = "";
    return mensaje;
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



