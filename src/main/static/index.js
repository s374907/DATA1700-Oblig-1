let billetter = []
let table = document.getElementById("table")
let liste = ["film", "antall", "fornavn","etternavn","telefonnr","epost"]
let values = []
 function addBillett(){
    let error = false
    liste.forEach(function (name){
      values.push(document.getElementById(name).value)
    })
    let errors = document.getElementsByClassName("error")
    for (var i = 0; i < errors.length; i++) {
      errors[i].innerHTML = " ";
    }
    console.log(document.getElementById("error.epost").innerHTML)
    for(let [index, val] of values.entries()){
      if(!val){
      let pog = "error."+liste[index]
      console.log(document.getElementById(pog))
      document.getElementById(pog).innerHTML = "You need to write";
      error = true
      }
    }
    if(error){
      return
    }
    
    billetter.push({film: values[0], antall:values[1], fornavn: values[2],
    etternavn: values[3], telefonnr: values[4], epost: values[5]})
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