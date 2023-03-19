var ile=0;

function czysc() {
	document.getElementById("pole").value="";
	ile=0;
}

function kasuj() {
	if (document.getElementById("pole").value=="Błąd!") {
		document.getElementById("pole").value="";
	}
	document.getElementById("pole").value=document.getElementById("pole").value.slice(0,-1);
	if (ile > 0)
		ile--;
}

function liczba(wartosc) {
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
		try {
			document.getElementById("pole").value=document.getElementById("pole").value.replace('^','**');
			document.getElementById("pole").value=document.getElementById("pole").value.replace(',','.');
			pom=document.getElementById("pole").value;
			
			
			document.getElementById("pole").value=eval(pom);
			ile=document.getElementById("pole").value.length;
		}
		
		catch (error) {
			document.getElementById("pole").value="Błąd!";
			ile=0;
		}
	}
}