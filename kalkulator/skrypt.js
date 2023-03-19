var ile=0;
var wynik;

function czysc() {
	document.getElementById("pole").value="";
	ile=0;
}

function kasuj() {
	if (document.getElementById("pole").value=="ERROR!") document.getElementById("pole").value="";
	document.getElementById("pole").value=document.getElementById("pole").value.slice(0,-1);
	if (ile > 0)
		ile--;
}

function liczba(wartosc) {
	if(document.getElementById("pole").value=="ERROR!") document.getElementById("pole").value="";
	document.getElementById("pole").value=document.getElementById("pole").value+wartosc;
	ile++;
}


function dzialanie(wartosc) {
	var pom=document.getElementById("pole").value[ile-1];
	if (pom!="+" && pom!="-" && pom!="*" && pom!="/" && pom!="%" && pom!="^" && pom!=undefined) {
		ile++;
		document.getElementById("pole").value=document.getElementById("pole").value+wartosc;
	}
}

function rowne() {	
	var pom=document.getElementById("pole").value[ile-1];
	if (pom!="+" && pom!="-" && pom!="*" && pom!="/" && pom!="%" && pom!="^" && pom!=undefined) {

			document.getElementById("pole").value=document.getElementById("pole").value.replace('^','**');
			document.getElementById("pole").value=document.getElementById("pole").value.replace(',','.');
			pom=document.getElementById("pole").value;
			

			wynik = eval(pom);
			if (isNaN(wynik)) {
				document.getElementById("pole").value = "ERROR!";
				ile=0;
			}
			else {
				document.getElementById("pole").value=wynik;
				ile=document.getElementById("pole").value.length;
				ile=document.getElementById("pole").value.length;
			}
		


	}
}