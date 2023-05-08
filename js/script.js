let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")

let relogio = setInterval(
    function tempo(){
        let date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let seg = date_now.getSeconds();

        if(hr < 10){
            hr = "0" + hr;
        } if(min < 10){
            min = "0" + min;
        } if(seg < 10){
            seg = "0" + seg;
        }

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = seg;
    },1000
)
