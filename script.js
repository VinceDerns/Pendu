const tableauMots = ["punie", "importation", "billard", "conservateur", "honneur", "escalade", "programmation", "informatique"];
const clavier = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n" ];

let reponse = "";
let nombreEssai = 7;
let erreur = 0;
let DevineMot = [];
let trouveOuPas = null;


function motAuHazard () {
   reponse = tableauMots[Math.round(Math.random() * tableauMots.length)];   
   return reponse
}
motAuHazard ();

console.log(reponse)

clavier.forEach(function (mot) {	
	const touche = document.createElement("button");
    touche.classList.add("clavier")
    touche.textContent = mot;
	touche.addEventListener("click", () => {
        console.log(mot)
    });
    	
	document.querySelector("#clavier").appendChild(touche);
    
});

function trouverMot (choixLettre) {
    trouver.indexOf(choixLettre) === -1 ? trouver.push(choixLettre) : null;
    document.getElementById(choixLettre).setAttribute('disabled', true);

    if (reponse.indexOf(choixLettre) >= 0) {
          devinerMot();
          siLeJeuEstGagne();
    } else if (reponse.indexOf(choixLettre) === -1 ) {
        erreur++
        ajoutErreur();
        siLeJeuEstPerdu();
    }
 };



function siLeJeuEstGagne () {
if (trouveOuPas === reponse) {
    document.querySelector("#clavier").innerHTML = "Vous avez gagné !"
}
};

function siLeJeuEstPerdu () {
    if (erreur === nombreEssai) {

    }
};

function devinerMot () {
    trouveOuPas = reponse.split("").map(lettres => (trouver.indexOf(lettres) >= 0 ? lettres : " _ ")).join("");
    document.getElementById
}

function ajoutErreur () {
document.getElementById("erreur").innerHTML = erreurMax;
}
