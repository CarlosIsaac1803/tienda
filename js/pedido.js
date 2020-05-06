document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //TOMATE
    let can_tom_lis=document.querySelector("#can_tom_lis").value
    let lbs_tom=document.querySelector("#lbs_tom").value
    let tomateText=document.querySelector("#tomateText").value
    let tomateValor=document.querySelector("#tomateValor").value
    //PIMIENTO
    let can_pim_lis=document.querySelector("#can_pim_lis").value
    let lbs_pim=document.querySelector("#lbs_pim").value
    let piminetoText=document.querySelector("#piminetoText").value
    let pimientoValor=document.querySelector("#pimientoValor").value
    //CEBOLLA
    let can_ceb_lis=document.querySelector("#can_ceb_lis").value
    let lbs_ceb=document.querySelector("#lbs_ceb").value 
    let cebollaText=document.querySelector("#cebollaText").value
    let cebollaValor=document.querySelector("#cebollaValor").value
    //PAPA
      let can_pap_lis=document.querySelector("#can_pap_lis").value
      let lbs_pap=document.querySelector("#lbs_pap").value
      let papaText=document.querySelector("#papaText").value
      let papaValor=document.querySelector("#papaValor").value
    //VERDE
      let can_ver_lis=document.querySelector("#can_ver_lis").value
      let lbs_ver=document.querySelector("#lbs_ver").value
      let verdeText=document.querySelector("#verdeText").value
      let verdeValor=document.querySelector("#verdeValor").value
    //YUCA
    let can_yuc_lis=document.querySelector("#can_yuc_lis").value
    let lbs_yuc=document.querySelector("#lbs_yuc").value
    let yucaText=document.querySelector("#yucaText").value
    let yucaValor=document.querySelector("#yucaValor").value
    
    //DATOS CLIENTE
    let nombre =document.querySelector("#nombre").value;
    let direccion =document.querySelector("#direccion").value;
    let horario =document.querySelector("#horario").value;
    let total =document.querySelector("#total").value;
    
    let resp = document.querySelector("#respuesta");
    
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${5491157369770}&text=
    Datos De Cliente%0A
    *Nombre*%0A
    ${nombre}%0A
    *Direccion*%0A
    ${direccion}%0A
    ________________%0A
    Lista de compra%0A           
    ${can_tom_lis}+${lbs_tom}+${tomateText}+${tomateValor}%0A    
    ${can_pim_lis}+${lbs_pim}+${piminetoText}+${pimientoValor}%0A
    ${can_ceb_lis}+${lbs_ceb}+${cebollaText}+${cebollaValor}%0A
    ${can_pap_lis}+${lbs_pap}+${papaText}+${papaValor}%0A
    ${can_ver_lis}+${lbs_ver}+${verdeText}+${verdeValor}%0A
    ${can_yuc_lis}+${lbs_yuc}+${yucaText}+${yucaValor}%0A   
    *Total a pagar*+%24${total}%0A%0A
    *Horario de entrega*%0A
    ${horario} `; 
                
          
    if (nombre === "" || direccion === "" || horario === "____click para elegir horario") {
      resp.classList.add("fail");
      resp.innerHTML = `Complete Horario de entrega, nombre, o direccion`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");    
    resp.innerHTML = `Se ha enviado su pedido`;

    //LIMPIEZA DE CAMPOS
    //TOMATE
    document.querySelector("#can_tom").value="0"
    document.querySelector("#can_tom_lis").value=""
    document.querySelector("#lbs_tom").value=""
    document.querySelector("#tomateText").value=""
    document.querySelector("#tomateValor").value=""
    //PIMIENTO
    document.querySelector("#can_pim").value="0"
    document.querySelector("#can_pim_lis").value=""
    document.querySelector("#lbs_pim").value=""
    document.querySelector("#piminetoText").value=""
    document.querySelector("#pimientoValor").value=""
    //CEBOLLA
    document.querySelector("#can_ceb").value="0"
    document.querySelector("#can_ceb_lis").value=""
    document.querySelector("#lbs_ceb").value="" 
    document.querySelector("#cebollaText").value=""
    document.querySelector("#cebollaValor").value=""
    //PAPA
    document.querySelector("#can_pap").value="0"
    document.querySelector("#can_pap_lis").value=""
    document.querySelector("#lbs_pap").value=""
    document.querySelector("#papaText").value=""
    document.querySelector("#papaValor").value=""
    //VERDE
    document.querySelector("#can_ver").value="0"
    document.querySelector("#can_ver_lis").value=""
    document.querySelector("#lbs_ver").value=""
    document.querySelector("#verdeText").value=""
    document.querySelector("#verdeValor").value=""
    //YUCA
    document.querySelector("#can_yuc").value="0"
    document.querySelector("#can_yuc_lis").value=""
    document.querySelector("#lbs_yuc").value=""
    document.querySelector("#yucaText").value=""
    document.querySelector("#yucaValor").value=""


    document.getElementById("nombre").value=""
    document.getElementById("direccion").value=""
    document.getElementById("total").value=""

    
    window.open(url);
  });