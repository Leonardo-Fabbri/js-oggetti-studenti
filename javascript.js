var studente = {
    "nome" :"Leonardo",
    "cognome" : "Fabbri",
    "età": "22 anni"

}

//stampare a schermo le proprietà utilizzando il for//
for (var key in studente) {
    console.log (key + ":" + studente[key]);
}





//seconda parte//
var studenti = [
    {
        "nome" :"Leonardo",
        "cognome" : "Fabbri",
        "età": "22 anni"

    },
    {
        "nome" :"Paolo",
        "cognome" : "Galilei",
        "età": "23 anni"

    },
    {
        "nome" :"Paperpone",
        "cognome" : "Paperopoli",
        "età": "20 anni"

    }
];


for(var key in studenti){
    console.log (studenti[key]["nome"] +" " +studenti[key]["cognome"]);
}



 // terrza parte//









