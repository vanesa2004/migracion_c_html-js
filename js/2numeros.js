function mayormenor(){
    var num1 = parseInt(document.form.numero1.value);
    var num2 = parseInt(document.form.numero2.value);
    let muestra= document.getElementById("igual")

   if (num1>num2) {

    document.form.num1.value=num1;
    document.form.num2.value=num2;
 
   } else if (num2>num1 ) {
    document.form.num1.value=num2;
    document.form.num2.value=num1;
   }

   if ( num1==num2){

    muestra.innerHTML = "<br> <br> Los numeros son iguales  " ;
   }

}