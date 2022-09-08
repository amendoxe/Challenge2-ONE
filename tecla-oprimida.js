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
// function isItDefined() {
// 	for (let i = 0; i < phrase.length; i++) {
// 		if ((document.querySelector(`.num${i}`).innerText = undefined)) {
// 			document.querySelector(`.num${i}`).innerText = "";
// 			document.querySelector(`.incorrecta-num${i}`).innerText = "";
// 		}
// 	}
// }

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

// let indexPosition = adivinaEsto.indexOf(typedWordUpp);
// let palabraEncontrada = document.querySelector(`.num${indexPosition}`);
// palabraEncontrada.style.color = "#0a3871";
// console.log("posicion del typedWord: " + indexPosition);
// console.log(adivinaEsto.includes(typedWordUpp));
function imprimePalabra() {
	for (let i = 0; i < adivinaEsto.length; i++) {
		document.querySelector(`.num${i}`).innerText = adivinaEsto[`${i}`];
	}
}
document.addEventListener("keyup", function game(event) {
	typedWord = event.key;
	typedWordUpp = typedWord.toUpperCase();
	phrase += typedWord.toUpperCase();
	// console.log("Phrase " + phrase);
	console.log("Typed" + typedWord);

	if (rights <= intentosTotales || wrongs < intentosTotales) {
		//antes era phrase.length
		// Aquí se escriben los valores

		checkInAdivina();
	}
	if (rights == adivinaEsto.length) {
		varReset();
		mensajeGanador.style.display = "";
		bloqueaControles();
	}
	if (wrongs.length == intentosTotales) {
		varReset();
		mensajeFin.style.display = "";
		imagenJuego.src = `images/figura-8.png`;
		bloqueaControles();
	} else {
		console.log("Mesnaje defautl");
		//varReset();
		//detener el juego
		// fin = 1;
	}
});
