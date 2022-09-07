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
}
function isItDefined() {
	for (let i = 0; i < phrase.length; i++) {
		if ((document.querySelector(`.num${i}`).innerText = undefined))
			document.querySelector(`.num${i}`).innerText = "";
		else {
			document.querySelector(`.num${i}`).innerText = phrase[`${i}`].toUpperCase();
		}
	}
}

document.addEventListener("keyup", function (event) {
	typedWord = event.key;
	phrase += typedWord;
	console.log(phrase);
	console.log(typedWord);

	if (phrase.length < adivinaEsto.length) {
		isItDefined();

		console.log(`Primera tecla oprimida ${phrase}`);
	} else {
		phrase = "";
		//detener el juego
		mensajeFin.style.display = "";
		mensajeGanador.style.display = "";
	}
});
