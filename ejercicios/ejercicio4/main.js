

const  calcular_tiempo  =  ( )  =>  {
    const  vi  =  documento . getElementById ("inp_vi").valor
    const  vf  =  documento . getElementById ("inp_vf").valor
    
        const constante =  ( vf - vi )  /  9.81

    return resultado

}

const  calcular  =  ( )  =>  {
    const  respuesta  =  calcular_tiempo ( )
    documento . getElementById ( "h3_tiempo" ) . textContent  =  "el tiempo final es:" + respuesta ;
}

const  boton  =  document.getElementById ( "btn_calcular" );
boton .  addEventListener( "click" , calcular );
