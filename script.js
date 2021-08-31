let played = false;
let user = "";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const rock__com = document.getElementById("rock__com");
const paper__com = document.getElementById("paper__com");
const scissors__com = document.getElementById("scissors__com");

const play = document.getElementById("play");

play.disabled = true;
play.style.opacity = "0.5";

const box__shadow = document.getElementById("box__shadow");

let victories = 0,
  draws = 0,
  defeats = 0


// 1ª función - controlar la elección y lógica de los botones

function choose(btnEle, evt) {
  // btnEle => El botón | evt => evento/acción => 'click'

  if (btnEle === rock) {
    user = "r";
    btnEle.classList.add("btn__active");

    paper.classList.remove("btn__active");
    scissors.classList.remove("btn__active");

  } else if (btnEle === paper) {
    user = "p";

    btnEle.classList.add("btn__active");

    rock.classList.remove("btn__active");
    scissors.classList.remove("btn__active");


  } else if (btnEle === scissors) {
    user = "s";

    btnEle.classList.add("btn__active");

    paper.classList.remove("btn__active");
    rock.classList.remove("btn__active");
  }

  play.disabled = false;
  play.style.opacity = "1";

}

// 2ª Función - Control de flujo del juego (CPU aleatoria, marcador de VDE (victorias, derrotas, empates, etc.))

function play__game() {
  if (!played) { // Si todavia no hemos jugado ...
    let random__number = Math.round(Math.random() * (2 - 0) + 0);

    const computer = ["r", "p", "s"];

    // Comprueba si el dispositivo está orientado en modo horizontal o vertical

    if (window.innerHeight > window.innerWidth) {
      // Puntuación para dispositivos móviles en orientación vertical,
      // navegadores de escritorio y tablets


      text__victories = document.getElementById("score__victories");
      text__draws = document.getElementById("score__draws");
      text__defeats = document.getElementById("score__defeats");
    }
    else {
      // Puntuación para dispositivos móviles en orientación horizontal

      text__victories = document.getElementById("score__victoriesMP");
      text__draws = document.getElementById("score__drawsMP");
      text__defeats = document.getElementById("score__defeatsMP");
    }

    switch (random__number) {
      case 0:
        computer[0];
        rock__com.classList.remove("hide");
        break;
      case 1:
        computer[1];
        paper__com.classList.remove("hide");
        break;
      case 2:
        computer[2];
        scissors__com.classList.remove("hide");
        break;
      default:
        alert("Por favor, reinicia el juego");
    }

    if (user === computer[random__number]) {
      draws++;
      text__draws.innerHTML = draws;
      played = true;
      return; //No continua comprovando
    }

    if (winner(user, computer[random__number])) {
      victories++;
      text__victories.innerHTML = victories;
      played = true;
      return; //No continua comprovando
    }

    defeats++;
    text__defeats.innerHTML = defeats;
    played = true;
  } else { // Si ya hemos jugado
    //alert("Ya has jugado la partida, por favor reinicia el juego");
    show__message();
  }

}

// 3ª Función - comprovar si hemos ganado, perdido o empatado

function winner(player, opponent) {
  if (
    (player === "r" && opponent === "s") ||
    (player === "s" && opponent === "p") ||
    (player === "p" && opponent === "r")
  ) {
    return true;

    //Si resultas ganador, devuelve un valor true para cumplir el #2 condicional
  }
}

// 4ª Función - Reiniciar el juego

function reboot(activeElements) {

  rock__com.classList.add("hide");
  paper__com.classList.add("hide");
  scissors__com.classList.add("hide");

  played = false;
  play.disabled = true;
  play.style.opacity = "0.5";

  rock.classList.remove("btn__active");
  paper.classList.remove("btn__active");
  scissors.classList.remove("btn__active");

}

// 5ª Función - Mostrar mensaje para reiniciar el juego

function show__message() {

  /*
  box__shadow.style.display = "block";
  box__shadow.classList.add("animate__fadeInDown");
  box__shadow.classList.remove("animate__fadeOutUp");
  */


  swal({
    title: "Alto!",
    text: "Ya has jugado una partida, por favor reinicia el juego",
    icon: "error",
    button: "Aceptar",
  });

}

/*
function hide__message() {

  box__shadow.classList.remove("animate__fadeInDown");
  box__shadow.classList.add("animate__fadeOutUp");

}
*/