import Bhaskara from './bhaskara.js'

const mostrar = () => {
    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value

    /* 
        1- se crea la instancia
        2- se envian los parametros al constructor
        3- se ejecuta el constructor
        
        ____________________________________________________________________________________________
        
        ノ(´◔ ω◔`) ノ  ノ(´◔ ω◔`) ノ  ノ(´◔ ω◔`) ノ  ノ(´◔ ω◔`) ノ  ノ(´◔ ω◔`) ノ  ノ(´◔ ω◔`) ノ
        
        ____________________________________________________________________________________________
    */
    const instancia = new Bhaskara(a,b,c);
    const raiz1= instancia.calcular_r1()
    const raiz2= instancia.calcular_r2()

    document.getElementById("r1").textContent= 'raiz 1 ='+raiz1;
    document.getElementById("r2").textContent= 'raiz 1 ='+raiz2;



}
const boton= document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);