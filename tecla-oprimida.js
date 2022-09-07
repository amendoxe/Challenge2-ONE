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
function checkInAdivina() {
	if (adivinaEsto.indexOf(typedWord)) {
	}
}
function imprimePalabra() {
	for (let i = 0; i < adivinaEsto.length; i++) {
		document.querySelector(`.num${i}`).innerText = adivinaEsto[`${i}`];
	}
}
document.addEventListener("keyup", function (event) {
	typedWord = event.key;
	phrase += typedWord.toUpperCase();
	console.log("Phrase " + phrase);
	console.log("Typed" + typedWord);

	if (phrase.length <= adivinaEsto.length) {
		checkInAdivina();
		//isItDefined();
		//   Aquí se escriben los valores
		// console.log(`Primera tecla oprimida ${phrase}`);
	} else {
		phrase = "";
		//detener el juego
		mensajeFin.style.display = "";
		mensajeGanador.style.display = "";
		// fin = 1;
	}
});
