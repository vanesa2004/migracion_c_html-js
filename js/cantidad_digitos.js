function digitos(){

    var a = parseFloat(document.cdigitos.numeros.value);
	let  ver = document.getElementById("vr")
    


    while (a>=0 & a<=9) 
  	 { ver.innerHTML="El numero que ha ingresado es de: 1 digito ";
	   
	   }
	
     while (a>=10 & a<=99)
	 { ver.innerHTML="El numero que ha ingresado es de: 2 digitos";
	 
	 }
	
     while (a>=100 & a<=999)
	 { ver.innerHTML="El numero que ha ingresado es de: 3 digitos";
	 
	 }
	 
	 while (a>=1000 & a<=9999)
	 { ver.innerHTML="El numero que ha ingresado es de: 4 digitos";
	 
	 }
	
	 while (a>=10000 & a<=99999)
	 { ver.innerHTML="El numero que ha ingresado es de: 5 digitos";
	 
	 }
	
	 while (a>=100000 & a<=999999)
	 { ver.innerHTML="El numero que ha ingresado es de : 6 digitos";
	 
	 }
	
     if (a>=1000000)
      { ver.innerHTML="Error, por favor ingrese un numero menor de 1'000.000";
    
	  }





}