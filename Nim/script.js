
var imageElt=byId("allumette");

var nbrAllumettes = 0;

function byId(id) {
  return document.getElementById(id);
}


function charger(){
nbrAllumettes = byId("nombreAllumettes").value;
var zoneEnleverElt=byId("zoneEnlever");

imageElt.innerHTML="";
zoneEnleverElt.innerHTML="";

for(var i=1;i<=nbrAllumettes;i++){
var image = new Image();
image.src="https://previews.123rf.com/images/intelwond/intelwond1508/intelwond150800082/43746521-allumette-en-bois-rouge-isol%C3%A9-sur-fond-blanc.jpg";
image.alt="une allumette";
imageElt.appendChild( image );
}

//creer le bouton enlever
var boutonEnlever = document.createElement("BUTTON");
boutonEnlever.type="submit";
boutonEnlever.setAttribute("onClick","enlever()");
var enlever = document.createTextNode("ENLEVER"); 
boutonEnlever.appendChild(enlever);
zoneEnleverElt.appendChild(boutonEnlever);

//creer le champ de saisie
var champ = document.createElement("input");
var txt = document.createTextNode(" allumette(s).");
champ.type = "text";
champ.id="allumettesEnlevees";
zoneEnleverElt.appendChild(champ);
zoneEnleverElt.appendChild(txt);		
}

function enlever(){
var nbrAllumEnlevees =byId("allumettesEnlevees").value;

if ((nbrAllumEnlevees=="")||(nbrAllumEnlevees>4)||(nbrAllumEnlevees<1)){
alert("veuillez saisir un nombre compris entre 1 et 3 svp! ");
} else if (nbrAllumettes<nbrAllumEnlevees){
alert("Pas assez d'allumettes ! ");
} else {
for(var i=nbrAllumEnlevees-1;i>=0;i--){
imageElt.removeChild( imageElt.lastChild );
}

nbrAllumettes -= nbrAllumEnlevees;
}

alert("Attention,il reste: " + nbrAllumettes + " allumette(s)");

if ( nbrAllumettes == 1){
imageElt.innerHTML="<p><strong>Jeux terminé</strong></p>";
}
}