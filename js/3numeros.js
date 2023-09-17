function tresnum(){
    var n1 = parseInt(document.form1.numero1.value);
    var n2 = parseInt(document.form1.numero2.value);
    var n3 = parseInt(document.form1.numero3.value);
    let mensaje = document.getElementById("iguales");
    let mostrar = document.getElementById("ig");

    if(n2<n1 && n2<n3)  //si x es menor que w & x es menor que z     
    {                 // el numero mayor es z
     if (n1<n3)	      // si w es menor que z (w seria inetermedio)
     {  

        document.form1.men.value=n2; // menor    *** primera probabilidad****
        document.form1.inter.value=n1; // medio
        document.form1.may.value=n3; // mayor
     } else if (n1>n3) {

      document.form1.men.value=n2; // menor    1 3 2 
      document.form1.inter.value=n3; // medio  *******************
      document.form1.may.value=n1; // mayor

     }
    }
  // w es n1    
  // x es n2
  // z es n3
  if(n1<n2 && n1<n3)  // 
  {
  if (n2<n3)	
  {

    document.form1.men.value=n1; // menor    3 2 1 muestra solo 1
    document.form1.inter.value=n2; // medio
    document.form1.may.value=n3; // mayor
     
  }
  else if (n2>n3){
    
    document.form1.men.value=n1; // menor    ******************** 
    document.form1.inter.value=n3; // medio 3 1 2 muestransolo 1
    document.form1.may.value=n2; // mayor
    
  }
  }
  
  if(n3<n2 && n3<n1 && n2!=n1)
  {	
  if (n2<n1)	
  {
    document.form1.men.value=n3; // menor    
    document.form1.inter.value=n2; // medio
    document.form1.may.value=n1; // mayor
   
  }
  else{
    document.form1.men.value=n3; // menor    ++++++++++++ 
    document.form1.inter.value=n1; // medio
    document.form1.may.value=n2; // mayor

  } 
  }
    //
    
  if (n2==n1 && n2==n3)   // si todos los numeros son iguales
  { 
   
    mensaje.innerHTML = "<br> <br> Los numeros son iguales  " ;
       
  }
    
    if (n2==n1 && n2<n3) // si (n2) es igual con (n1) entonces (n2 & n1 son menores que n3)
  {
    mostrar.innerHTML =" <br> <br> Primer y segundo resultado son menores e iguales : "+n2;
    mensaje.innerHTML =" <br> <br> Mayor : "+n3;
     	
    }
  
  if(n2==n1 && n2>n3)   // sino se cumple primera condicion entoces (n2 & n1 son mayores que n3)
  {
    mostrar.innerHTML =" <br> <br> Primer y segundo resultado son mayores e iguales : "+n2;
    mensaje.innerHTML =" <br> <br> Menor : "+n3;
    
  }	// fin segunda condicion 
    // finalin3a primera condicion 
  
  if (n2==n3 && n2<n1) // si (n2) es igual con (n3) entonces (n2 & n3 son menores que n1)
  {
    mostrar.innerHTML =" <br> <br> Segundo y tercer resultado son menores e iguales : "+n2;
    mensaje.innerHTML =" <br> <br> Mayor : "+n1;
    
    }
  else if(n2==n3 && n2>n1)  // sino se cumple primera condicion entoces (n2 & n3 son mayores que n1)
  {
    mostrar.innerHTML =" <br> <br> Segundo y tercer resultado son mayores e iguales : "+n2;
    mensaje.innerHTML =" <br> <br> Menor : "+n1;
    
  }	// fin segunda condicion 
   // finalin3a primera condicion 
  
  if (n3==n1 && n3<n2) // si (n3) es igual con (n1) entonces (n3 & n1 son menores que n2)
  {
    mostrar.innerHTML =" <br> <br> Primer y tercer resultado son menores e iguales : "+n3;
    mensaje.innerHTML =" <br> <br> Mayor : "+n2;
    
    }
  else if (n3==n1 && n3>n2)  // sino se cumple primera condicion entoces (n3 & n1 son mayores que n2)
  {
    mostrar.innerHTML =" <br> <br> Primer y tercer resultado son mayores e iguales : "+n3;
    mensaje.innerHTML =" <br> <br> Menor : "+n2;
    
  }	// fin de las condiciones


}