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
let rightWords = "";
let indexesSum = 0; //MAYbe Maybe
let intentosTotales = 8;
const imagenJuego = document.querySelector(".stick-image");

function checkInAdivina() {
	if (adivinaEsto.indexOf(typedWordUpp) > -1) {
		const indexes = [...adivinaEsto.matchAll(new RegExp(typedWord, "gi"))].map((a) => a.index);
		console.log(indexes);
		indexes.forEach((element) => {
			rights = rights + 1;
			let palabraEncontrada = document.querySelector(`.num${element}`);
			palabraEncontrada.style.color = "#0a3871";

			console.log("posicion del typedWord: " + element);
			console.log("rights: " + rights);
			//agregando palabras a rightwords
		});
	} else {
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
	// console.log("Phrase " + phrase);
	console.log("Typed" + typedWord);

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
		console.log("Mesnaje defautl");
	}
}

function dontListenAnymore() {
	document.removeEventListener("keyup", listenKeyboard);
}
