var btnSalvar = document.querySelector("#salvarMedia");
var listMaterias = document.querySelector("#materias");

btnSalvar.onclick = function () {

	var t1 = (document.getElementById("t1").value == "") ? 'n' : parseFloat(document.getElementById("t1").value);
	var t2 = (document.getElementById("t2").value == "") ? 'n' : parseFloat(document.getElementById("t2").value);

	var a2 = (document.getElementById("a2").value == "") ? 'n' : parseFloat(document.getElementById("a2").value);
	var a3 = (document.getElementById("a3").value == "") ? 'n' : parseFloat(document.getElementById("a3").value);

	let nome = prompt("Digite o nome da matéria");

	if (nome != '' && nome != null) {

		if ((a2 != 'n') || (a3 != 'n')) {
			addMateria(nome);
		}
	}
	limparCampos();

};

var materias = JSON.parse(localStorage.getItem('materias_salvas')) || [];

function renderMaterias() {

	listMaterias.innerHTML = '';

	for (materia of materias) {

		//criando Li
		var materiaElement = document.createElement('li');
		//var materiaText = document.createTextNode(materia[0]);

		//criando link
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', "#");
		var linkText = document.createTextNode('[x]');

		//adicionando texto Excluir ao <a>
		linkElement.appendChild(linkText);

		//add excluir ao link
		var pos = materias.indexOf(materia);
		linkElement.setAttribute('onclick', "removeMateria(" + pos + ")");

		materiaElement.innerHTML =
			"<div class='btnMateria' style='background-color:white;color:black'>" + materia[0] + "</div>" +
			"A1 :" + "<div class='btnMateria'>" + materia[2] + "</div>+ " +
			materia[1] + " :" + "<div class='btnMateria'>" + materia[3] + "</div> = " +
			"<div class='btnMateria' style='border-left: 5px solid white'>" + materia[4] + "</div>";

		//materiaElement.appendChild(materiaText);
		materiaElement.appendChild(linkElement);
		listMaterias.appendChild(materiaElement);
	}

}

renderMaterias();

function addMateria(nomeMateria) {

	/*calculo*/
	var mediaFinal = 0;
	var t1 = (document.getElementById("t1").value == "") ? 0 : parseFloat(document.getElementById("t1").value);
	var t2 = (document.getElementById("t2").value == "") ? 0 : parseFloat(document.getElementById("t2").value);

	var a1 = ((t1 + t2) / 2) * 0.4;
	var a2 = (document.getElementById("a2").value == "") ? 0 : parseFloat(document.getElementById("a2").value);
	var a3 = (document.getElementById("a3").value == "") ? 0 : parseFloat(document.getElementById("a3").value);
	na2 = a2 * 0.6;
	na3 = a3 * 0.6;
	if (a2 > a3) {
		mediaFinal = a1 + na2;
	} else {
		mediaFinal = a1 + na3;
	}
	mediaFinal = mediaFinal.toFixed(1);
	/*calculo*/

	maiorNota = (na2 > na3) ? na2 : na3;
	siglaMaiorNota = (a2 > a3) ? 'A2' : 'A3';

	materia = [
		nomeMateria,
		siglaMaiorNota,
		a1.toFixed(1),
		maiorNota.toFixed(1),
		mediaFinal
	];

	materias.push(materia);

	console.log(materias);
	renderMaterias();
	saveToStorage();
}

function removeMateria(pos) {
	materias.splice(pos, 1);
	renderMaterias();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('materias_salvas', JSON.stringify(materias));
}

saveToStorage();