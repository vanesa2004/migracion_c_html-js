function sumar() {
    var a1 = parseInt(document.Form.numero1.value);
    var a2 = parseInt(document.Form.numero2.value);
    document.Form.resultado.value=a1+a2;
 }

function restar (){
    var a1 = parseInt(document.Form.numero1.value);
    var a2 = parseInt(document.Form.numero2.value);
    document.Form.resultado.value=a1-a2;
    }

function multiplicar () {
        var a1= parseInt(document.Form.numero1.value);
        var a2= parseInt(document.Form.numero2.value);
        document.Form.resultado.value=a1*a2;
    }

function dividir () {
    var a1 = parseInt(document.Form.numero1.value);
    var a2 = parseInt(document.Form.numero2.value);
    document.Form.resultado.value=a1/a2;
    } 
    
function modulo () {
        var a1 = parseInt (document.Form.numero1.value);
        var a2 = parseInt (document.Form.numero2.value);
        document.Form.resultado.value=a1%a2;
    }    