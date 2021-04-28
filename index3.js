let choosed = false;
let played = false;

let usuario = '';

let textoInfo = '';

const piedraUSR = document.getElementById('piedra');
const papelUSR = document.getElementById('papel');
const tijeraUSR = document.getElementById('tijera');

const piedraCOM = document.getElementById('piedraCOM');
const papelCOM = document.getElementById('papelCOM');
const tijeraCOM = document.getElementById('tijeraCOM');


function escoger(btnEle, evt) { // btnEle => El botón | evt => evento/acción => 'click'
 	
	if(btnEle == piedraUSR) {
 		btnEle.style.backgroundColor = 'rgba(0, 0, 255, 1)';
		papelUSR.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
		tijeraUSR.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    
    	usuario = 'r';
  	}  
  
  	else if(btnEle == papelUSR) {
  		btnEle.style.backgroundColor = 'rgba(255, 0, 0, 1)';
		piedraUSR.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
		tijeraUSR.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    
    	usuario = 'p';
  	}
  
  	else if(btnEle == tijeraUSR) {
  		btnEle.style.backgroundColor = 'rgba(0, 255, 0, 1)';
		papelUSR.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
		piedraUSR.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    
    	usuario = 't';
  	}
 
 	choosed = true;
 
 	if(choosed) {
 		console.log('choosed is switched to: ' + choosed);
 	}
 
}

function jugar() {

	if(!choosed) {
		textoInfo = document.getElementById('textoResultado');
		textoInfo.innerHTML = '¡Debes elegir una figura antes de jugar!';
	}
	
	else {

		if(!played) {

		aleatorio = Math.round(Math.random() * (2 - 0) + 0);	

		computadora = ['r', 'p', 't'];
					
		textoInfo = document.getElementById('textoResultado'); 

			switch(aleatorio) {
				case 0:
					computadora[0];
					piedraCOM.classList.remove('hide');
				break;
				case 1:
					computadora[1];
					papelCOM.classList.remove('hide');
				break;
				case 2:
					computadora[2];
					tijeraCOM.classList.remove('hide');
				break;

			}
			
			if (usuario == computadora[aleatorio]) {			
				textoInfo.innerHTML = 'Empate';
				textoInfo.style.color = 'orange';		
				played = true;		
				return; //No continua comprovando
				
			}

			if (ganador(usuario, computadora[aleatorio])) {					
				textoInfo.innerHTML = '¡Has ganado!';
				textoInfo.style.color = 'green';
				played = true;
				return; //No continua comprovando
				
			}			
				
			textoInfo.innerHTML = '¡Has perdido!';
			textoInfo.style.color = 'red';
			played = true;
		}

		else {
			alert('Ya has jugado la partida, por favor reinicia el juego');
		}
			
	}
}
	


function ganador(jugador, oponente) {


	if((jugador == 'r' && oponente == 't') || (jugador == 't' && oponente == 'p') || (jugador == 'p' && oponente == 'r')) {
		
		return true;

		//Si resultas ganador, devuelve un valor true para cumplir el #2 condicional
	}
			
}

function reiniciar() {
  textoInfo.innerHTML = '';
  textoInfo.style.color = 'black';
  
  piedraUSR.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
  papelUSR.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
	tijeraUSR.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    
  piedraCOM.classList.add('hide');
  papelCOM.classList.add('hide');
  tijeraCOM.classList.add('hide');

	choosed = false;
	played = false;
}