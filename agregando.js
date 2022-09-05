//Agregando palabras al arreglo
let arreglo = ["uno ", " dos ", " tres ", " cuatro "];
const input = document.querySelector(".introduce-palabra");
const button = document.querySelector(".button-1");
const buttonDos = document.querySelector(".button-2");
const textArea = document.querySelector(".impression");
button.addEventListener("click", function () {
	if (arreglo.indexOf(input.value) === -1 && input.value.length > 2) {
		arreglo.push(input.value);
		input.value = "";
	} else {
		input.value = "";
	}
});
buttonDos.addEventListener("click", function () {
	textArea.innerText = arreglo;
});
