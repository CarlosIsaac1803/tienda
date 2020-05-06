   
    tom=0, pim=0, ceb=0, pap=0, ver=0, yuc=0 
      
        function sumar(){
        tom=parseFloat(tom)   
        pim=parseFloat(pim)
        ceb=parseFloat(ceb)
        pap=parseFloat(pap)
        ver=parseFloat(ver)
        yuc=parseFloat(yuc)
        totalSuma=tom+pim+ceb+pap+ver+yuc
        
        console.log("el valor de tom es "+tom+1)
        console.log("el valor de pim es "+pim+1)
        console.log(" el valor de ceb es "+ceb+1)

        console.log("el valor de la suma es A "+totalSuma)
        var a=parseFloat(totalSuma)
        a=a.toFixed(2)
        console.log("el valor de la suma es B "+a)
        
        document.getElementById("total").value=a
    }
    
    function tomate(){
        /*ACUMULADOR DE CANTIDAD DE PRODUCTOS*/
        a=document.getElementById("can_tom").value        
        b=parseInt(a)       
        c=b+1      
        d=String(c)
        /*RELLENAR TABLA LISTA DE PEDIDO*/      
        document.getElementById("can_tom").value=d      
        a=document.getElementById("can_tom_lis").value=d
        document.getElementById("lbs_tom").value="lbs"
        document.getElementById("tomateText").value="de tomate $"     
              
        /*CALCULO DE SUBTOTAL*/        
        var b=a*0.8
        var b=b.toFixed(2)        
        e=document.getElementById("tomateValor").value=b
        tom=e       
        sumar()     
    }
   
    function eliminar_tom(){
        document.getElementById("can_tom").value="0"
        document.getElementById("can_tom_lis").value=""
        document.getElementById("lbs_tom").value=""
        document.getElementById("tomateText").value=""
        document.getElementById("tomateValor").value=""
        tom=0        
        sumar()
    }
    
        /*--------PIMIENTO PIMIENTO---------------------*/
    function pimiento(){
       /*ACUMULADOR DE CANTIDAD DE PRODUCTOS*/
       a=document.getElementById("can_pim").value        
       b=parseInt(a)       
       c=b+1      
       d=String(c)
       /*RELLENAR TABLA LISTA DE PEDIDO*/      
       document.getElementById("can_pim").value=d      
       a=document.getElementById("can_pim_lis").value=d
       document.getElementById("lbs_pim").value="lbs"
       document.getElementById("piminetoText").value="de pimiento $"     
             
       /*CALCULO DE SUBTOTAL*/
       
       var b=a*0.7
       var b=b.toFixed(2)        
       e=document.getElementById("pimientoValor").value=b
       pim=e       
       sumar()   
    }
   
    function eliminar_pim(){
        document.getElementById("can_pim").value="0"
        document.getElementById("can_pim_lis").value=""
        document.getElementById("lbs_pim").value=""
        document.getElementById("piminetoText").value=""
        document.getElementById("pimientoValor").value=""
        pim=0
        sumar()
    }
    /*-----------------------CEBOLLA---------------------------*/
    function cebolla(){
         /*ACUMULADOR DE CANTIDAD DE PRODUCTOS*/
         a=document.getElementById("can_ceb").value        
         b=parseInt(a)       
         c=b+1      
         d=String(c)
         /*RELLENAR TABLA LISTA DE PEDIDO*/      
         document.getElementById("can_ceb").value=d      
         a=document.getElementById("can_ceb_lis").value=d
         document.getElementById("lbs_ceb").value="lbs"
         document.getElementById("cebollaText").value="de cebolla $"     
               
         /*CALCULO DE SUBTOTAL*/
         var b=a*0.5
         var b=b.toFixed(2)        
         e=document.getElementById("cebollaValor").value=b
         ceb=e       
         sumar()
    }
    
    function eliminar_ceb(){
        document.getElementById("can_ceb").value="0"
        document.getElementById("can_ceb_lis").value=""
        document.getElementById("lbs_ceb").value=""
        document.getElementById("cebollaText").value=""
        document.getElementById("cebollaValor").value=""
        ceb=0
        sumar()
    }
    /*----------------------PAPA---------------------------- */
    function papa(){
        /*ACUMULADOR DE CANTIDAD DE PRODUCTOS*/
        a=document.getElementById("can_pap").value        
        b=parseInt(a)       
        c=b+1      
        d=String(c)
        /*RELLENAR TABLA LISTA DE PEDIDO*/      
        document.getElementById("can_pap").value=d      
        a=document.getElementById("can_pap_lis").value=d
        document.getElementById("lbs_pap").value="lbs"
        document.getElementById("papaText").value="de papa $"     
              
        /*CALCULO DE SUBTOTAL*/        
        var b=a*0.35
        var b=b.toFixed(2)        
        e=document.getElementById("papaValor").value=b
        pap=e       
        sumar()     
    }
   
    function eliminar_pap(){
        document.getElementById("can_pap").value="0"
        document.getElementById("can_pap_lis").value=""
        document.getElementById("lbs_pap").value=""
        document.getElementById("papaText").value=""
        document.getElementById("papaValor").value=""
        pap=0        
        sumar()
    }
    /*-------------------VERDE-------------------------- */
    function verde(){
        /*ACUMULADOR DE CANTIDAD DE PRODUCTOS*/
        a=document.getElementById("can_ver").value        
        b=parseInt(a)       
        c=b+1      
        d=String(c)
        /*RELLENAR TABLA LISTA DE PEDIDO*/      
        document.getElementById("can_ver").value=d      
        a=document.getElementById("can_ver_lis").value=d
        document.getElementById("lbs_ver").value="lbs"
        document.getElementById("verdeText").value="de verde $"     
              
        /*CALCULO DE SUBTOTAL*/        
        var b=a*0.50
        var b=b.toFixed(2)        
        e=document.getElementById("verdeValor").value=b
        ver=e       
        sumar()     
    }
   
    function eliminar_ver(){
        console.log("entro a funcion eliminar")
        document.getElementById("can_ver").value="0"
        document.getElementById("can_ver_lis").value=""
        document.getElementById("lbs_ver").value=""
        document.getElementById("verdeText").value=""
        document.getElementById("verdeValor").value=""
        ver=0        
        sumar()
    }
    /*--------------------YUCA-------------------------- */
    function yuca(){
        /*ACUMULADOR DE CANTIDAD DE PRODUCTOS*/
        a=document.getElementById("can_yuc").value        
        b=parseInt(a)       
        c=b+1      
        d=String(c)
        /*RELLENAR TABLA LISTA DE PEDIDO*/      
        document.getElementById("can_yuc").value=d      
        a=document.getElementById("can_yuc_lis").value=d
        document.getElementById("lbs_yuc").value="lbs"
        document.getElementById("yucaText").value="de yuca $"     
              
        /*CALCULO DE SUBTOTAL*/        
        var b=a*0.30
        var b=b.toFixed(2)        
        e=document.getElementById("yucaValor").value=b
        yuc=e       
        sumar()     
    }
   
    function eliminar_yuc(){
        document.getElementById("can_yuc").value="0"
        document.getElementById("can_yuc_lis").value=""
        document.getElementById("lbs_yuc").value=""
        document.getElementById("yucaText").value=""
        document.getElementById("yucaValor").value=""
        yuc=0        
        sumar()
    }