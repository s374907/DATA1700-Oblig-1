let billetter = []
let table = document.getElementById("table")
let liste = ["film", "antall", "fornavn","etternavn","telefonnr","epost"]
 function addBillett(){
    let values = []
    let error = false
    liste.forEach(function (name){
      values.push(document.getElementById(name).value)
    })
    let errors = document.getElementsByClassName("error")
    for (var i = 0; i < errors.length; i++) {
      errors[i].innerHTML = " ";
    }
    
    for(let [index, val] of values.entries()){
      if(!val && index <= 5){
      let pog = "error."+liste[index]
      document.getElementById(pog).innerHTML = "Må skrive noe inn i " + liste[index];
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