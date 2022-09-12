// TECLA OPRIMIDA
let typedWord;
let phrase = "";
resetLetters();
function resetLetters() {
	document.querySelector(".num0").innerText = "";
	document.querySelector(".num1").innerText = "";
	document.querySelector(".num2").innerText = "";
	document.querySelector(".num3").innerText = "";
	document.querySelector(".num4").innerText = "";
	document.querySelector(".num5").innerText = "";
	document.querySelector(".num6").innerText = "";
	document.querySelector(".num7").innerText = "";
	document.querySelector(".incorrecta-num0").innerText = "";
	document.querySelector(".incorrecta-num1").innerText = "";
	document.querySelector(".incorrecta-num2").innerText = "";
	document.querySelector(".incorrecta-num3").innerText = "";
	document.querySelector(".incorrecta-num4").innerText = "";
	document.querySelector(".incorrecta-num5").innerText = "";
	document.querySelector(".incorrecta-num6").innerText = "";
	document.querySelector(".incorrecta-num7").innerText = "";
}

let wrongs = "";
let rights = 0; //Palabras acertadas
let fraseDeEscritas = "";
let indexesSum = 0; //MAYbe Maybe
let intentosTotales = 8;
const imagenJuego = document.querySelector(".stick-image");
let indexesReg = [];

function checkInAdivina() {
	if (adivinaEsto.indexOf(typedWordUpp) > -1) {
		const indexes = [...adivinaEsto.matchAll(new RegExp(typedWordUpp, "gi"))].map((a) => a.index);
		if (indexesReg.indexOf(indexes) === -1) {
			indexesReg += indexes;
			console.log("indexes" + indexes);
			indexes.forEach((element) => {
				rights = rights + 1;
				fraseDeEscritas += typedWordUpp;
				console.log("rights: " + rights);
				let palabraEncontrada = document.querySelector(`.num${element}`);
				palabraEncontrada.style.color = "#0a3871";
			});
		}
	} else {
		if (wrongs.indexOf(typedWordUpp) === -1) {
			wrongs += typedWordUpp;
			console.log("no acertadas " + wrongs);
			for (let i = 0; i < wrongs.length; i++) {
				document.querySelector(`.incorrecta-num${i}`).innerText = wrongs[`${i}`];
				//imagen
				for (let i = 0; i <= wrongs.length; i++) {
					imagenJuego.src = `images/figura-${i}.png`;
				}
				console.log("wrongs: " + wrongs.length);
			}
		}
	}
}

function imprimePalabra() {
	for (let i = 0; i < adivinaEsto.length; i++) {
		document.querySelector(`.num${i}`).innerText = adivinaEsto[`${i}`];
	}
}
function comienzaAEscuchar() {
	document.addEventListener("keyup", listenKeyboard);
}

function listenKeyboard(event) {
	typedWord = event.key;
	typedWordUpp = typedWord.toUpperCase();
	phrase += typedWord.toUpperCase();

	if (rights <= intentosTotales || wrongs < intentosTotales) {
		// Aquí se escriben los valores
		checkInAdivina();
	}
	if (rights == adivinaEsto.length) {
		varReset();
		mensajeGanador.style.display = "";
		dontListenAnymore();
	}
	if (wrongs.length == intentosTotales) {
		varReset();
		mensajeFin.style.display = "";
		imagenJuego.src = `images/figura-8.png`;
		dontListenAnymore();
	} else {
		console.log("Mensaje default");
	}
}

function dontListenAnymore() {
	document.removeEventListener("keyup", listenKeyboard);
}
