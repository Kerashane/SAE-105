// On crée un objet de paramètres à partir de l'URL
const params = new URLSearchParams(location.search);
// On récupère la clef dans les paramètres
const clef = params.get('clef');
console.log(clef);

// On abrège SAE[clef] en data
const data = SAE[clef];

// On déclare ac et ressource comme string
let ac = '';
let ressources = '';

// On récupère les données de AC en bouclant sur les clefs
for (const index in data.AC) {
    // On ajoute/concatène le html
    ac += '<a target="_blank" href="../pdf/'+clef+'.pdf"><div class="sae">'+index+':'+data['AC'][index]+'</div></a>';
}

for (const index in data.ressources) {
    ressources += '<div class="sae">' + index + ':'+data['ressources'][index]+'</div>';
}

// Manipulation du DOM (html de la page)
// Affichage du html : ac et ressources
document.querySelector("h1").innerText=clef;
document.querySelector("h2").innerText=SAE[clef].titre;
document.querySelector(".ac").innerHTML="<div class ='zone-sae'> "+ac+"</div>" ;
document.querySelector(".ressources").innerHTML="<div class ='zone-sae'> "+ressources+"</div>" ;
