let param = new URLSearchParams(location.search);
let numsae = param.get("sae");
console.log(numsae);

let cler = Object.keys(SAE[numsae].ressources);
let valeursr = Object.values(SAE[numsae].ressources);
listr = "";
for (i = 0; cler.length > i; i++) {
    listr += "<div>" + cler[i] + " : " + valeursr[i] + "</div>";
}
console.log(listr);

let apprentitech = Object.keys(SAE[numsae].AC);
let devtech = Object.values(SAE[numsae].AC);
dev = "";
for (i=0; apprentitech.length > i; i++){
    dev += "<div>" + apprentitech[i] + " : " + devtech[i] + "</div>";
}
console.log(dev);

document.querySelector(".cadre").innerHTML = `
<h2> ${numsae}</h2>
<div>${SAE[numsae].titre}</div>
<div>${SAE[numsae].compétences}</div>
<div>${SAE[numsae].description}</div>
<div>${listr}</div>
<div>${dev}</div>
`;
