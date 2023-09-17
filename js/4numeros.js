function fornum(){
    var n1 = parseInt(document.form4.numero1.value);
    var n2 = parseInt(document.form4.numero2.value);
    var n3 = parseInt(document.form4.numero3.value);
    var n4 = parseInt(document.form4.numero4.value);
    let mensaje = document.getElementById("num1")
	let mostrar = document.getElementById("num2")
	let men = document.getElementById("num3")
	let mens = document.getElementById("num4")
	let iguales = document.getElementById("todos")
	

    if (n1<n2 && n1<n3 && n1<n4)
  {
	mensaje.innerHTML ="<br> <br> El numero menor es :"+n1;  // condiciones de n1 menor
  }
  
   if (n2<n3 && n2<n1 && n2<n4)
  {
  	mostrar.innerHTML ="<br> <br> El numero menor es :"+n2;  // condiciones de n2 menor
  	
  }
  
   if (n3<n2 && n3<n1 && n3<n4)
  {
  	men.innerHTML ="<br> <br> El numero menor es :"+n3;  // condiciones de n3 menor 
  }
  
   if (n4<n2 && n4<n3 && n4<n1) 
  {
  	mens.innerHTML ="<br> <br> El numero menor es :"+n4; // condiciones de n4 menor	
  }
  
  
  if (n1>n2 && n1>n3 && n1>n4)  //  condicion  de n1 mayor
  {
  	mensaje.innerHTML ="<br> <br> El numero mayor es :"+n1;
  }
  
  if (n2>n1 && n2>n3 && n2>n4)
  {
  	  // condiciones de n2 mayor	
	document.form4.n2.value=n2;
  }
  
  if (n3>n1 && n3>n2 && n3>n4)  
  {
  	men.innerHTML ="<br> <br> El numero mayor es :"+n3;  // condiciones de n3 mayor
  	
  }
  
  if (n4>n2 && n4>n3 && n4>n1)  
  {
  	mens.innerHTML ="<br> <br> El numero mayor es :"+n4; // condiciones de n4 mayor
  }	
  
  //para n1 si es igual a cualquiera de los dos
  if(n1==n2 && n2<n3 && n2<n4)  
	 {
       mensaje.innerHTML ="<br> <br> Primero y segundo son menores e iguales: "+n1; 
	 }
	 
  if(n1==n2 && n2>n3 && n2>n4)  
	 {
       mensaje.innerHTML ="<br> <br> Primero y segundo son mayores e iguales: "+n1; 
	 }
	
  if(n1==n3 && n3<n2 && n3<n4)  
	 {
       mensaje.innerHTML ="<br> <br> Primero y tercero son menores e iguales: "+n1; 
	 }
	
  if(n1==n3 && n3>n2 && n3>n4)  
	 {
       mensaje.innerHTML ="<br> <br> Primero y tercero son mayores e iguales: "+n1; 
	 }
	 
  if(n1==n4 && n4<n2 && n4<n3)  
	 {
       mensaje.innerHTML ="<br> <br> Primero y cuarto son menores e iguales: "+n1; 
	 }
	 
  if(n1==n4 && n4>n2 && n4>n3)  
	 {
       mensaje.innerHTML ="<br> <br> Primero y cuarto son mayores e iguales: "+n1; 
	 }
	 
  if(n1==n2 && n2==n3 && n3<n4)  
	 {
       mensaje.innerHTML ="<br> <br> Primero,segundo y tercero son menores e iguales: "+n1; 
	 }
	 
	if(n1==n2 && n2==n3 && n3>n4)  
	 {
       mensaje.innerHTML ="<br> <br> Primero,segundo y tercero son mayores e iguales: "+n1; 
	 }
	 
    if(n1==n2 && n2==n4 && n4<n3)  
	 {
       mensaje.innerHTML ="<br> <br> Primero,segundo y cuarto son menores e iguales: "+n1; 
	 }
	 if(n1==n2 && n2==n4 && n4>n3)  
	 {
       mensaje.innerHTML ="<br> <br> Primero,segundo y cuarto son mayores e iguales: "+n1; 
	 }	
	 
	 if(n1==n3 && n3==n4 && n4<n2)  
	 {
       mensaje.innerHTML ="<br> <br> Primero,tercero y cuarto son menores e iguales: "+n1; 
	 }
	 
	 if(n1==n3 && n3==n4 && n4>n2)  
	 {
       mensaje.innerHTML ="<br> <br> Primero,tercero y cuarto son mayores e iguales: "+n1; 
	 }
	 
	 if(n2==n3 && n3==n4 && n4<n1)  
	 {
       mensaje.innerHTML ="<br> <br> Segundo,tercero y cuarto son menores e iguales: "+n1; 
	 }	 
	 
	 if(n2==n3 && n3==n4 && n4>n1)  
	 {
       mensaje.innerHTML ="<br> <br> Segundo,tercero y cuarto son mayores e iguales: "+n1; 
	 }	
	 
	 if(n1==n2 && n3==n4 && n1<n3 )  
	 {
        mensaje.innerHTML ="<br> <br> Primero y segundo son menores e iguales:"+n1; 
       dobl.innerHTML ="<br> <br> Tercero y cuarto son mayores e iguales:"+n3; 
	 }
	 
	 if(n1==n2 && n3==n4 && n1>n3 )  
	 {
		mensaje.innerHTML ="<br> <br> Primero y segundo son mayores e iguales:"+n1; 
		dobl.innerHTML ="<br> <br> Tercero y cuarto son menores e iguales:"+n3; 
	 }
	 
	 if(n1==n3 && n2==n4 && n1<n2 )  
	 {
		mensaje.innerHTML ="<br> <br> Primero y tercero son menores e iguales:"+n1; 
		mens.innerHTML ="<br> <br> Segundo y cuarto son mayores e iguales:"+n4; 
	 }
	 
	 if(n1==n3 && n2==n4 && n1>n2 )  
	 {
        mensaje.innerHTML ="<br> <br> Primero y tercero son mayores e iguales:"+n1; 
		mens.innerHTML ="<br> <br> Segundo y cuarto son menores e iguales:"+n4; 
	 }
	 
	 if(n1==n4 && n2==n3 && n1<n2 )  
	 {
		mensaje.innerHTML ="<br> <br> Primero y cuarto son menores e iguales:"+n1; 
		mostrar.innerHTML ="<br> <br> Segundo y tercero son mayores e iguales:"+n2; 
	 }
	 
	 if(n1==n4 && n2==n3 && n1>n2 )  
	 {
		mensaje.innerHTML ="<br> <br> Primero y cuarto son mayores e iguales:"+n1; 
		mostrar.innerHTML ="<br> <br> Segundo y tercero son menores e iguales:"+n2; 
	 }
	 
	 if(n3==n4 && n4<n1 && n4<n2 )  
	 {
       men.innerHTML ="<br> <br> Tercero y cuarto son menores e iguales:"+n3;  
	 }
	 
	 if(n3==n4 && n4>n1 && n4>n2 )  
	 {
       men.innerHTML ="<br> <br> Tercero y cuarto son mayores e iguales:"+n3;  
	 }
	  
  if (n1==n2 && n2==n3 && n3==n4)
	 {
	 	iguales.innerHTML ="<br> <br> Los numeros son iguales";
	 }
    }