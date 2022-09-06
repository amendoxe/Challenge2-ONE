let adivinaEsto = arreglo[`${ranGen()}`];
function ranGen() {
	return Math.floor(Math.random() * arreglo.length);
}
console.log(adivinaEsto);
