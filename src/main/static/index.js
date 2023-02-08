let billetter = []
let table = document.getElementById("table")
let liste = ["film", "antall", "fornavn","etternavn","telefonnr","epost"]

 function addBillett(){
    let values = []
    let error = false

    //Gjør en for each som tar verdiene fra inputen og pusher den i arrayen values
    liste.forEach(function (name){
      values.push(document.getElementById(name).value)
    })

    let errors = document.getElementsByClassName("error")
    
    //Sletter error meldingene 
    for (var i = 0; i < errors.length; i++) {
      errors[i].innerHTML = " ";
    }
    
    /*Lager error meldingene. Note: "index <= liste.length - 1" virker ubrukelig, 
    men indexen ble 7 randomly, og jeg vet ikke hvorfor.*/
    for(let [index, val] of values.entries()){
      if(!val && index <= liste.length - 1){
      let pog = "error."+liste[index]
      document.getElementById(pog).innerHTML = "Må skrive noe inn i " + liste[index];
      error = true
      }
    }

    //Om noen av inputsene er tomme, så gjør vi en early return
    if(error){
      return
    }
    
    /*Gjør valuesene fra listen "values" om til ett objekt 
    og pusher det i listen "billetter"*/
    billetter.push({film: values[0], antall:values[1], fornavn: values[2],
    etternavn: values[3], telefonnr: values[4], epost: values[5]})

    let row = table.insertRow(-1)

    /*Vi gjøre en for loop for hver eneste attribut siste objekten i listen har
    også lager vi en celle for hver av attributtene med verdiene*/
    for(let thing in billetter[billetter.length - 1]){
      let cell = row.insertCell(-1)
      cell.innerHTML = billetter[billetter.length - 1][thing]
    }
  }
    
function slettBillett(){
  //Sletter alle radene utenom den siste også tømmer billetter arrayet
  for(let i = 0; i < billetter.length; i++){
    table.deleteRow(-1)
  }
    billetter = []
}
