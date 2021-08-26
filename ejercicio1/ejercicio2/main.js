


const calcular = () => {

    const datoa = document.getElementById("inp_a").Value;
    const datob = document.getElementById("inp_b").Value;
    const datoc = document.getElementById("inp_c").Value;

    const bloque1 = (Math.pow(datob,2)) - (4*datoa*datoc);
    const raiz =    Math.sqrt(bloque1)

    const r1 = (- datob + raiz) / (2,datoa);
    const r2 = (- datob - raiz) / (2,datoa);

    document.getElementById("r1").textContent = "Raiz 1: "+r1;
    document.getElementById("r2").textContent = "Raiz 2: "+r2;
}

const boton=document.addEventById("btn_calcular");
boton.addEventListener("Click",calcular);