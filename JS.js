var vida = 100;

//estados de jugador
var vivo = true;
var quemado = false;
var envenenado = false;

//acciones cpu
var ataquar = 0;
var quemar = 1;
var envenenar = 2; 
var fallr = 3;

// funciones
function jugarTurno(){
        var jugadaCPU = Math.floor(Math.random() * 4);
        //console.log(jugadaCPU);


        
    if(jugadaCPU == ataquar){
    console.log('has sido ataqudo');
    vida = vida - 10;
    }

    if(jugadaCPU == quemar){
        console.log('has sido quemado');
        vida = vida - 20;
        }

    if(jugadaCPU == envenenar){
    console.log('has sido envenenado');
    vida = vida - 40;

            }

    if(jugadaCPU == fallr){
      console.log('han fallado en el ataque');
    }
    console.log(vida)
}

function pocion(){
vida = vida + 10
console.log('Te has curado')
console.log('Vida: ' + vida)

}







