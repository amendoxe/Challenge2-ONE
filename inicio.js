const pagina1 = document.querySelector(".page1");
const pagina2 = document.querySelector(".page2");
const pagina3 = document.querySelector(".page3");
const buttonIniciarP1 = document.querySelector(".inicia");
const buttonAgregaP1 = document.querySelector(".agrega");
const buttonGuardarP2 = document.querySelector(".save-start");
const buttonCancelarP2 = document.querySelector(".cancel-input");
const buttonNuevoP3 = document.querySelector(".juego-nuevo");
const buttonDesistirP3 = document.querySelector(".desistir");
const imagen = document.querySelector(".stick-image");
let arreglo = ["UNO", "DOS", "TRES", "CUATRO"];
let pasa = 0;
pantallaPrincipal();
function pantallaPrincipal() {
	hidePagina2();
	hidePagina3();
}

function hidePagina1() {
	pagina1.style.display = "none";
}
function hidePagina2() {
	pagina2.style.display = "none";
}
function hidePagina3() {
	pagina3.style.display = "none";
}
function showPagina1() {
	pagina1.style.display = "";
}
function showPagina2() {
	pagina2.style.display = "";
}
function showPagina3() {
	pagina3.style.display = "";
}

function iniciarJuego() {}
function agregarNuevaPalabra() {}
function guardarYEmpezar() {}
function cancelar() {}
function nuevoJuego() {}
function desistir() {}
buttonIniciarP1.addEventListener("click", function () {
	hidePagina1();
	hidePagina2();
	showPagina3();
});
buttonAgregaP1.addEventListener("click", function () {
	hidePagina1();
	hidePagina3();
	// inputU.focus();
	showPagina2();
	console.log(inputU);
});
buttonGuardarP2.addEventListener("click", function () {
	hidePagina1();
	agregaPalabra();

	if (pasa === 1) {
		// pasa = 0;
		hidePagina2();
		showPagina3();
	} else {
		showPagina2();
	}
});
buttonCancelarP2.addEventListener("click", function () {
	showPagina1();
	hidePagina2();
	hidePagina3();
});
function agregaPalabra() {
	let inputU = document.querySelector(".ingresa-palabra").value;
	let inputUpper = inputU.toUpperCase();

	console.log(inputUpper);
	if (arreglo.indexOf(inputUpper) === -1 && inputUpper.length > 2) {
		arreglo.push(inputUpper);
		pasa = 1;
		console.log(`Pasa arreglo ${arreglo}`);
		document.querySelector(".ingresa-palabra").value = "";
	} else {
		document.querySelector(".ingresa-palabra").value = "";

		pasa = 0;
		console.log(`no pasa el arreglo queda ${arreglo}`);
		inputUpper = "";
		inputUpper = inputU.toUpperCase();
	}
}
buttonNuevoP3.addEventListener("click", function () {
	hidePagina1();
	hidePagina2();
	showPagina3();
});
buttonDesistirP3.addEventListener("click", function () {
	showPagina1();
	hidePagina2();
	hidePagina3();
});
