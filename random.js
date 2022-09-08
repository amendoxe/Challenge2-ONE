let adivinaEsto = arreglo[`${ranGen()}`];
console.log(adivinaEsto);
hideCorrectWords();
hideIncorrectWords();
showCorrectWords();
function ranGen() {
	return Math.floor(Math.random() * arreglo.length);
}
// Quitar los espacios que no se utilizan
function hideCorrectWords() {
	for (let i = 0; i < 8; i++) {
		let correct = document.querySelector(`.num${i}`);
		correct.style.display = "none";
	}
}

function hideIncorrectWords() {
	for (let i = 0; i < 8; i++) {
		let correct = document.querySelector(`.incorrecta-num${i}`);
		correct.style.display = "none";
	}
}
function resetStyle() {
	for (let i = 0; i < 8; i++) {
		let style = document.querySelector(`.num${i}`);
		style.style.color = "#f3f5fc";
	}
}

//Aparece lo que se va a usar----------------------------
function showCorrectWords() {
	for (let i = 0; i < adivinaEsto.length; i++) {
		let palabraAparece = document.querySelector(`.num${i}`);
		let incorrectaAparece = document.querySelector(`.incorrecta-num${i}`);
		palabraAparece.style.display = "";
		incorrectaAparece.style.display = "";
	}
}
//BOTONES P3
buttonNuevoP3.addEventListener("click", function () {
	hidePagina1();
	hidePagina2();
	showPagina3();
	resetLetters();
	adivinaEsto = arreglo[`${ranGen()}`];
	console.log(adivinaEsto);
	showCorrectWords();
	hideMensajes();
	imprimePalabra();
	resetStyle();
	varReset();
	comienzaAEscuchar();
});
buttonDesistirP3.addEventListener("click", function () {
	showPagina1();
	hidePagina2();
	imprimePalabra();

	hidePagina3();
	hideMensajes();
	resetLetters();
	phrase = "";
	adivinaEsto = arreglo[`${ranGen()}`];
	console.log(adivinaEsto);
});

// resetea variables----------------
function varReset() {
	phrase = "";
	wrongs = "";
	rights = 0;
	imagenJuego.src = `images/figura-0.png`;
	fraseDeEscritas = "";
	indexesReg = [];
}
