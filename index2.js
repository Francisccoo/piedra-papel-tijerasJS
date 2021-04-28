const piedraUSR = document.getElementById('piedra');
const papelUSR = document.getElementById('papel');
const tijeraUSR = document.getElementById('tijera');

const piedraCOM = document.getElementById('piedraCOM');
const papelCOM = document.getElementById('papelCOM');
const tijeraCOM = document.getElementById('tijeraCOM');

let choosed = false;

let usuario = '';

document.getElementById('piedra').addEventListener('click' , function() {
	
	piedraUSR.style.backgroundColor = 'rgba(0, 0, 255, 1)';
	papelUSR.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
	tijeraUSR.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';

	choosed = true;

	usuario = 'r';

})

document.getElementById('papel').addEventListener('click' , function() {
	
	papelUSR.style.backgroundColor = 'rgba(255, 0, 0, 1)';
	piedraUSR.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
	tijeraUSR.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';

	choosed = true;

	usuario = 'p';
})

document.getElementById('tijera').addEventListener('click' , function() {
	
	tijeraUSR.style.backgroundColor = 'rgba(0, 255, 0, 1)';
	papelUSR.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
	piedraUSR.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';

	choosed = true;

	usuario = 't';
})

function jugar() {

	if(!choosed) {
		const textoInfo = document.getElementById('textoResultado');
		textoInfo.innerHTML = '¡Debes elegir una figura antes de jugar!';
	}
	
	else {
			
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
			return; //No continua comprovando
			
		}

		if (ganador(usuario, computadora[aleatorio])) {					
			textoInfo.innerHTML = '¡Has ganado!';
			textoInfo.style.color = 'green';
			return; //No continua comprovando
			
		}			
			
		textoInfo.innerHTML = '¡Has perdido!';
		textoInfo.style.color = 'red';
	
	}
	
}


function ganador(jugador, oponente) {


	if((jugador == 'r' && oponente == 't') || (jugador == 't' && oponente == 'p') || (jugador == 'p' && oponente == 'r')) {
		
		return true;

		//Si resultas ganador, devuelve un valor true para cumplir el #2 condicional
	}
			
}
