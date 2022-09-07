let adivinaEsto = arreglo[`${ranGen()}`];
console.log(adivinaEsto);
hideCorrectWords();
hideRectangles();
hideIncorrectWords();
showCorrectWords();
function ranGen() {
	return Math.floor(Math.random() * arreglo.length);
}
console.log(adivinaEsto);
// Quitar los espacios que no se utilizan
function hideCorrectWords() {
	for (let i = 0; i < 8; i++) {
		let correct = document.querySelector(`.num${i}`);
		correct.style.display = "none";
	}
}
function hideRectangles() {
	for (let i = 0; i < 8; i++) {
		let cuac = document.querySelector(`.rectangulo${i}`);
		cuac.style.display = "none";
	}
}
function hideIncorrectWords() {
	for (let i = 0; i < 8; i++) {
		let correct = document.querySelector(`.incorrecta-num${i}`);
		correct.style.display = "none";
	}
}

//Aparece lo que se va a usar----------------------------
function showCorrectWords() {
	for (let i = 0; i < adivinaEsto.length; i++) {
		let palabraAparece = document.querySelector(`.num${i}`);
		let rectanguloAparece = document.querySelector(`.rectangulo${i}`);
		let incorrectaAparece = document.querySelector(`.incorrecta-num${i}`);
		palabraAparece.style.display = "";
		rectanguloAparece.style.display = "";
		incorrectaAparece.style.display = "";
	}
}
//BOTONES P3
buttonNuevoP3.addEventListener("click", function () {
	hidePagina1();
	hidePagina2();
	showPagina3();
	phrase = "";
	resetLetters();
	adivinaEsto = arreglo[`${ranGen()}`];
	console.log(adivinaEsto);
	showCorrectWords();
	hideMensajes();
	resetLetters();
});
buttonDesistirP3.addEventListener("click", function () {
	showPagina1();
	hidePagina2();
	hidePagina3();
	hideMensajes();
	resetLetters();
});

// phrase vs adivinaEsto----------------

if (phrase.length <= adivinaEsto.length) {
}
