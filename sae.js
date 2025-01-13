// string
const chaineDeCaracteres = '';
// number
const chiffres = 0;
// Object
const objet = {};
// Array
const tableau = [];
// Boolean : true, false
const vrai = true;
const faux = false;

let html = '';

for (const clef in SAE) {
    html += '<div><div class="sae"><h2>'+clef+'</h2><p>'+SAE[clef].titre+'</p>'+
    '<a href="sae-details.html?clef='+clef+'" class="competences">'+SAE[clef].compétences.join(', ')+'</a></div></div>';
}

document.querySelector(".zone-sae").innerHTML=html;