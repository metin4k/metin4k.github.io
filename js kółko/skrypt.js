var i=0;
var pom=0;
var win=false;

function funkcja() {
	for (let i=1; i<=9; i++)
		if(document.getElementById("przycisk"+i).textContent!="\u2573" && document.getElementById("przycisk"+i).textContent!="\u25EF")
			document.getElementById("przycisk"+i).disabled=false;
}


function rysuj(liczba) {
	if (win==false) {
	for (let i=1; i<=9; i++)
			document.getElementById("przycisk"+i).disabled=true;
	i++;
	var przycisk="przycisk"+liczba;
	var k=document.getElementById(przycisk).textContent;
		if (i%2==1) {
			document.getElementById(przycisk).textContent="\u2573";
			document.getElementById("ruch").textContent="\u25EF";
			pom++;
		}
		
		else if (i%2==0) {
			document.getElementById(przycisk).textContent="\u25EF";
			document.getElementById("ruch").textContent="\u2573";
			pom++;
		}

	
	setTimeout(funkcja, 300);
	
	
	
	k=document.getElementById(przycisk).textContent;

		
		
		
	if (document.getElementById("przycisk1").textContent==document.getElementById("przycisk2").textContent && document.getElementById("przycisk2").textContent==document.getElementById("przycisk3").textContent && document.getElementById("przycisk1").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	if (document.getElementById("przycisk4").textContent==document.getElementById("przycisk5").textContent && document.getElementById("przycisk5").textContent==document.getElementById("przycisk6").textContent && document.getElementById("przycisk4").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	if (document.getElementById("przycisk7").textContent==document.getElementById("przycisk8").textContent && document.getElementById("przycisk8").textContent==document.getElementById("przycisk9").textContent && document.getElementById("przycisk7").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	
	
	
	
	if (document.getElementById("przycisk1").textContent==document.getElementById("przycisk4").textContent && document.getElementById("przycisk4").textContent==document.getElementById("przycisk7").textContent && document.getElementById("przycisk1").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	if (document.getElementById("przycisk2").textContent==document.getElementById("przycisk5").textContent && document.getElementById("przycisk5").textContent==document.getElementById("przycisk8").textContent && document.getElementById("przycisk2").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	if (document.getElementById("przycisk3").textContent==document.getElementById("przycisk6").textContent && document.getElementById("przycisk6").textContent==document.getElementById("przycisk9").textContent && document.getElementById("przycisk6").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	
	
	
	if (document.getElementById("przycisk1").textContent==document.getElementById("przycisk5").textContent && document.getElementById("przycisk5").textContent==document.getElementById("przycisk9").textContent && document.getElementById("przycisk1").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}
	
	if (document.getElementById("przycisk3").textContent==document.getElementById("przycisk5").textContent && document.getElementById("przycisk5").textContent==document.getElementById("przycisk7").textContent && document.getElementById("przycisk3").textContent!='') {
		document.getElementById("wynik").textContent="Zwycięzca: "+k;
		win=true;
	}

	if (win==false && pom==9)
		document.getElementById("wynik").textContent="REMIS";
	

}

}


function resetp() {
	for (let i=1; i<=9; i++)
		document.getElementById("przycisk"+i).disabled=false;
	for (let j=1; j<10; j++)
		document.getElementById("przycisk"+j).textContent='';
	win=false;
	document.getElementById("wynik").innerHTML="&#8205;";
	pom=0;
}
