 
//alert("hola javascrip");
//funciones implicitas

$(document).ready(function (){

//alert("hola desde jquery");
 

 $('h1').hide('slow');
 $('h1').show('fast');//se le puede  poner fast-slow 


 $('h1').click(function(){
    $(this).hide('slow');
    $('#consola').html($(this).css('fontSize'));

    if($(this).css('fontSize')=='50px'){//primer seleccionar propiedades, asignarle un nuevo valor
    	 $(this).css('fontSize','32px');
    	}else{
          $(this).css('fontSize','50px');
    	}
    $(this).show('fast');
 });

$('#btn2').click(function(){
	$('#img1').attr('src','img/2.jpg');


});
$('#btn3').click(function(){
	$('#img1').attr('src','img/3.jpg');


});

$('#btn1').click(function(){
	$('#img1').attr('src','img/1.jpg');
	$('#img1').animate({

		opacity:0.25,
		width:"25",
		left:"50",
		height:"30"
	}, 5000, function(){
	});

});

});

/*

 function calcula(operacion){
           var operador1 = document.calc.operador1.value;
           var operador2 = document.getElementById("operador2").value;
           // alert(operador1);
           // alert(operador2);
            var resul= eval(operador1 + operacion + operador2);
            document.calc.resultado.value=resul
        }

        //otras funciones
         function conversionC (form)
        {
         form.c.value= form.tempe1.value*1.8+32
        }
        function conversionF (form)
        {
          form.c.value = (form.tempe1.value-32)/1.8 
        }

        function  TiempoH (valor,ope)
        {
           var operador1 = document.tiemp.tiempo.value;
            alert(operador1);

            var resul= eval(operador1 + ope + valor);
            document.tiemp.resultado.value=resul
        }

        function  TiempoM (valor,ope)
        {
           var operador1 = document.tiemp.tiempo.value;
            alert(operador1);

            var resul= eval(operador1 + ope + valor);
            document.tiemp.resultado.value=resul
        }

        function  TiempoS (valor,ope)
        {
           var operador1 = document.tiemp.tiempo.value;
            alert(operador1);

            var resul= eval(operador1 + ope + valor);
            document.tiemp.resultado.value=resul
        }

        function  PesoG (valor,ope)
        {
           var operador1 = document.peso.peso1.value;
            alert(operador1);

            var resul= eval(operador1 + ope + valor);
            document.peso.resultado.value=resul
        }
        function  PesoMG (valor,ope)
        {
           var operador1 = document.peso.peso1.value;
            alert(operador1);

            var resul= eval(operador1 + ope + valor);
            document.peso.resultado.value=resul
        }

         function  PesoLB (valor,ope)
        {
            var operador1 = document.peso.peso1.value;
      
            alert(operador1);

            var resul= eval(operador1 + ope + valor);
            document.peso.resultado.value=resul
        }
    
    */   