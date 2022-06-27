function calculo(a = null, b = null) {

	if (a > 10) {
		console.log("legal");
		limparCampoUnico(b);
		calculo();
	}

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

	var result = document.getElementById("resultado");
	var msg = "";

	//console.log(mediaFinal);

	var cor = '';

	if (mediaFinal >= 6) {
		msg = "Você foi aprovado e sua média foi: " + mediaFinal;
		cor = '#0c5287';
		valor = true;
	} else {
		msg = "Você foi reprovado por que sua nota foi abaixo de 6! Média: " + mediaFinal;
		cor = '#e72c32';
		valor = false;
	}

	result.innerHTML = msg;
	result.setAttribute("style", "background-color: " + cor + ";");
	sugestion();
	return valor;
}

function calculoA(trab1, trab2, av2, av3) {

	var mediaFinal = 0;
	var t1 = trab1;
	var t2 = trab2;
	//calculo da A1;
	var a1 = ((t1 + t2) / 2) * 0.4;

	var a2 = av2;
	var a3 = av3;

	na2 = a2 * 0.6;
	na3 = a3 * 0.6;
	if (a2 > a3) {
		mediaFinal = a1 + na2;
	} else {
		mediaFinal = a1 + na3;
	}

	mediaFinal = mediaFinal.toFixed(1);

	if (mediaFinal >= 6) {
		valor = true;
	} else {
		valor = false;
	}


	return valor;
}

function sugestion() {
	var t1 = (document.getElementById("t1").value == "") ? 0 : parseFloat(document.getElementById("t1").value);
	var t2 = (document.getElementById("t2").value == "") ? 0 : parseFloat(document.getElementById("t2").value);
	var a2 = (document.getElementById("a2").value == "") ? 0 : parseFloat(document.getElementById("a2").value);
	var a3 = (document.getElementById("a3").value == "") ? 0 : parseFloat(document.getElementById("a3").value);

	if (document.getElementById("t1").value == "") {
		while (calculoA(t1, t2, a2, a3) == false && t1 < 10) {
			t1 += 0.125;
		}
	}
	if (document.getElementById("t2").value == "") {
		while (calculoA(t1, t2, a2, a3) == false && t2 < 10) {
			t2 += 0.125;
		}
	}
	if (document.getElementById("a2").value == "") {
		while (calculoA(t1, t2, a2, a3) == false && a2 < 10) {
			a2 += 0.125;
		}
	}
	if (document.getElementById("a3").value == "") {
		while (calculoA(t1, t2, a2, a3) == false && a3 < 10) {
			a3 += 0.125;
		}
	}

	document.getElementById("t1").setAttribute("placeholder", t1.toFixed(1));
	document.getElementById("t2").setAttribute("placeholder", t2.toFixed(1));
	document.getElementById("a2").setAttribute("placeholder", "Mín de " + a2.toFixed(1) + " para aprovação!");
	document.getElementById("a3").setAttribute("placeholder", "Mín de " + a3.toFixed(1) + " para aprovação!");
}

function limparCampos() {
	document.getElementById("t1").value = "";
	document.getElementById("t2").value = "";
	document.getElementById("a2").value = "";
	document.getElementById("a3").value = "";
	calculo();
	document.getElementById("resultado").innerHTML = "...";
}

function limparCampoUnico(campo) {
	document.getElementById(campo).value = "";
}