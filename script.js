let cle = Object.keys(SAE)
let description = []
let competence = []
let sae = ""

for (let num = 0; num < cle.length; num++) {
    description.push(SAE[cle[num]].titre)
    competence.push(SAE[cle[num]].compétences.join(" "))
}

for (let cook = 0; cook < cle.length; cook++) {
    sae += '<a href="affichagecomp.html?sae=' + cle[cook] +'"><div class="sae"><h2>' + cle[cook] + '</h2><p>' + description[cook] + '</p><div class="competences">' + competence[cook] + '</div></div></a>'
}

document.querySelector(".zone-sae").innerHTML = sae;