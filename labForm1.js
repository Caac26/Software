
function start() {
	var btns = document.getElementsByTagName('button');
	
	for (var i = 0 ; i <btns.length; i++) {
		btns[i].onclick= control;

	};
	
}
function control(e) {
	
var resp=["2","3","3","1","4","2","2","1","3","4"];
var rad= document.getElementsByName("opcion");
boton=e.target;
var estado;
lol=boton.getAttribute("alt");
for(var i=0; i<rad.length; i++){
	var rad= document.getElementsByName("opcion");
	rad[2].disabled=true;
	if(rad[i].checked==true){
		estado = rad[i].value;
	}
	
	boton.setAttribute("alt","-");
}
if(estado==resp[lol-1]){
			alert("si es la correcta");
			document.getElementById("img"+lol).style.visibility = "visible";
			
		}else{
			alert("no es la correcta");
			document.getElementById("img-"+lol).style.visibility = "visible";
			
		}
		
}
