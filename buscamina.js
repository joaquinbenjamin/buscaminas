var arre=new Array(16);




		
  
var tamanio =64;
var arre = new Array(tamanio);
for(i=0;i<tamanio;i++){
	arre[i]=Math.floor((Math.random()*10)+0);
}
var cont=0;




 function main() {


	var container = document.getElementById("container");

	for (let i = 0; i < tamanio; i++) { // change -> let instead of var
		var div = document.createElement("div");
		div.id = 'celda' + i;

		container.appendChild(div);

	}

	for (let i = 0; i < tamanio; i++) {

		var div = document.getElementById("celda" + i);
		div.onclick = function () {
			// busca("celda" + i);
			busca(i);
		};
	}


	//	document.getElementById("container").innerHTML = '<div> </div>';
}



function busca(celda) {


	console.log(celda);
	console.log(arre[celda]);
	
	if (arre[celda]>2) {
		document.getElementById("celda" + celda).style.backgroundColor = "white";
		cont++;
	
	
	} else {document.getElementById("celda" + celda).style.backgroundColor = "red";
	
 	var mensaje= "MINA __ PERDISTE Tu puntaje fue ";
	mensaje +=cont;	

		alert(mensaje);
		location. reload();
}
	

}








