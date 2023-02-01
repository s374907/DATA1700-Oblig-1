let billetter = []
let table = document.getElementById("table")
function addBillett(){
    let error = false
    let film = document.getElementById("film").value
    let antall = document.getElementById("antall").value
    if(!antall){
      document.getElementById("error.antall").innerHTML = "You need to write"
      error = true
    }
    let fornavn = document.getElementById("fornavn").value
    if(!fornavn){
      document.getElementById("error.fornavn").innerHTML = "You need to write"
      error = true
    }
    let etternavn = document.getElementById("etternavn").value
    if(!etternavn){
      document.getElementById("error.etternavn").innerHTML = "You need to write"
      error = true
    }
    let telefonnr = document.getElementById("telefonnr").value
    if(!telefonnr){
      document.getElementById("error.telefonnr").innerHTML = "You need to write"
      error = true
    }
    let epost = document.getElementById("epost").value
    if(!epost){
      document.getElementById("error.epost").innerHTML = "You need to write"
      error = true
    }
    if(error){
      return
    }
    let errors = document.getElementsByClassName("error")
    for (var i = 0; i < errors.length; i++) {
      errors[i].innerHTML = " ";
    }
    billetter.push({film: film, antall: antall, fornavn: fornavn,
    etternavn: etternavn, telefonnr: telefonnr, epost: epost})
    let row = table.insertRow(-1)
    for(let thing in billetter[billetter.length - 1]){
      let cell = row.insertCell(-1)
      cell.innerHTML = billetter[billetter.length - 1][thing]
    }

  }
    
function slettBillett(){
  for(let i = 0; i < billetter.length; i++){
    table.deleteRow(-1)
  }
    billetter = []
}