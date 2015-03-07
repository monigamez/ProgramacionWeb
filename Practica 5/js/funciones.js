 

$(document).ready(function (){

 $('h2').hide('slow');
 $('h2').css('fontSize','70px');
 $('h2').show('fast');//se le puede  poner fast-slow 


 $('h2').click(function(){
    $(this).hide('slow');
    $('#consola').html($(this).css('fontSize'));

    if($(this).css('fontSize')=='50px'){//primer seleccionar propiedades, asignarle un nuevo valor
       $(this).css('fontSize','32px');
      }else{
          $(this).css('fontSize','50px');
      }
    $(this).show('fast');
 });


});

 
function financiamiento(){
           var monto = document.finan.monto.value;
           var meses = document.finan.meses.value;
           var valorTotal;
           var RI;
           var PagoM;
           
      
         if((meses>=1 )&& (meses<=3))
         {
          
            RI= (monto* 0.01);
            valorTotal=(parseInt(monto)+parseFloat(RI));
            PagoM=parseFloat(valorTotal)/parseInt(meses);
         
         }else
             if((meses>=4) &&( meses<=7))
            {
               RI= (monto* 0.02);
               valorTotal=(parseInt(monto)+parseFloat(RI));
               PagoM=parseFloat(valorTotal)/parseInt(meses);
                 
             }
             else
               if(meses>=8)
               {
                 RI= (monto*0.03);
                 valorTotal=(parseInt(monto)+parseFloat(RI));
                  PagoM=parseFloat(valorTotal)/parseInt(meses);
                
               }
           document.finan1.monto1.value=monto   
           document.finan1.TP.value=valorTotal;
           document.finan1.PM.value=PagoM

        }




     