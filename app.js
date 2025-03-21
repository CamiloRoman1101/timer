const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReinicio = document.getElementById('reiniciar');
const cronometro = document.getElementById('cronometro');

let [horas, minutos, segundos] = [0, 0, 0];

let intervalo;
let estado = 'pausado';

function actualizarCronometro(){
    segundos++;
    if(segundos/60 === 1){
        segundos = 0;
        minutos++;
        if(minutos/60 === 1){
            minutos = 0;
            horas++;
        }
    }

    const segundosFormato = asignarFormato(segundos);
    const minutosFormato = asignarFormato(minutos);
    const horasFormato = asignarFormato(horas);

    cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
}

function asignarFormato(tiempo){
    if(tiempo < 10){
        return `0${tiempo}`;
    }
    return tiempo
}

botonInicioPausa.addEventListener('click', () =>{
    if(estado === 'pausado'){
        intervalo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estado = 'iniciado';
    }else{
        window.clearInterval(intervalo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estado = 'pausado';
    }

});

botonReinicio.addEventListener('click', () =>{
    window.clearInterval(intervalo);
    [horas, minutos, segundos] = [0, 0, 0];
    cronometro.innerText = '00:00:00'
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
});

console.log(estado)


