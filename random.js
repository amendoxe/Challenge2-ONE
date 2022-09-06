let adivinaEsto = arreglo[`${ranGen()}`];
hideCorrectWords();
hideRectangles();
hideIncorrectWords();
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
// function hideIncorrectWords() {}
// for (let i = 0; i < adivinaEsto.length; i++) {
// 	let palabraAparece = document.querySelector(`.num${i}`);
// 	let rectanguloAparece = document.querySelector(`.num${i}`);
// 	palabraAparece.style.display = "none";
// 	rectanguloAparece.style.display = "none";
