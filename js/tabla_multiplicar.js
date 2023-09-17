function tablas(){
    var nt = parseInt(document.multiplicar.numero.value);
    var s = " ";
    for(var i=1; i<=10; i++){
        s= s+nt+ "x" +i+ "=" + (n*i) + "<button> Este es el resultado</button> <BR>" ;
    }
    var capa_resultado= document.getElementById("resultado");
    capa_resultado.innerHTML=s;  

}

