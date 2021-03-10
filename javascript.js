var studente = {
    "nome" :"Leonardo",
    "cognome" : "Fabbri",
    "età": "22 anni"

}

//stampare a schermo le proprietà utilizzando il for//
for (var key in studente) {
    console.log (key + ":" + studente[key]);
}