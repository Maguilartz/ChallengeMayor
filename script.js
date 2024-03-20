//Oculta la segunda fase del 
document.getElementById('segunda-fase-desencriptar').style.visibility='hidden';

let botonCopiar=" ";

//Desbloquea el botón para Encriptar cuando el input haya cambiado su valor
function desbloqueoDeBoton(){
    document.getElementById('encriptar').removeAttribute('disabled');
}

//Función para encriptar mensaje
function encriptar(){

    let txtcodif=document.getElementById('cadena').value;

    //valida carácteres y elimina en el resultado encriptado los que no tendrían en la cadena
    txtcodif=txtcodif.split(/[/}*-_+&%$#"!'=áéíóúüäëöü]/g).join("");

    if (txtcodif.length===0){
        alert("Ingresa el texto a codificar, por favor");
        document.getElementById('encriptar').setAttribute('disabled',true);
        document.getElementById('desencriptar').setAttribute('disabled',true);
        document.getElementById('copiado').setAttribute('disabled',true);
        let botonCopiar=document.getElementById('copiado');
        botonCopiar.textContent='...';
    } else {
        document.getElementById('copiado').removeAttribute('disabled');
        document.getElementById('desencriptar').removeAttribute('disabled');
    }
    
    ocultarMostrar();
    
    let newEncrip=txtcodif
        .replaceAll('e','enter')
        .replaceAll('i','imes')
        .replaceAll('a','ai')
        .replaceAll('o', 'ober')
        .replaceAll('u','ufac');
    
    console.log(newEncrip);
    
    botonCopiar.textContent='Copiar';
    
    CodigoAElemento('sustitucion',newEncrip.toLowerCase());
    
}

//Función para desencriptar mensaje
function desencriptar(){
    let txtdecodif=document.getElementById('cadena').value;

    let newDecodif=txtdecodif
        .replaceAll('enter','e')
        .replaceAll('imes','i')
        .replaceAll('ai','a')
        .replaceAll('ober', 'o')
        .replaceAll('ufac','u');
    
    console.log(newDecodif);
    
    botonCopiar.textContent='Copiar';
    
    CodigoAElemento('sustitucion',newDecodif);

}

//Enviar texto a elemento
function CodigoAElemento(elemento,texto){
    let elementohtml=document.getElementById(elemento);
    elementohtml.innerHTML=texto;
}

//Función para mostrar/ocultar la primera y segunda fase en el area para desencriptar
function ocultarMostrar(){
    document.getElementById('primera-fase-desencriptar').style.visibility='hidden';
    document.getElementById('segunda-fase-desencriptar').style.visibility='visible';
}

//Función para copiar el texto en el area de desencriptado
function copiar(){
    newDecodif=document.getElementById('sustitucion');
    let botonCopiar=document.getElementById('copiado');
    
    navigator.clipboard.writeText(newDecodif.textContent);
    botonCopiar.textContent='Copiado';
}
