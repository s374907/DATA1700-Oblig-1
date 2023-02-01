let billetter = []
function addBillett(){
    let film = document.getElementById("film").value
    let antall = document.getElementById("antall").value
    let fornavn = document.getElementById("fornavn").value
    let etternavn = document.getElementById("etternavn").value
    let telefonnr = document.getElementById("telefonnr").value
    let epost = document.getElementById("epost").value
    billetter.push({film: film, antall: antall, fornavn: fornavn,
    etternavn: etternavn, telefonnr: telefonnr, epost: epost})
    
var cols = ['film', 'antall', 'fornavn', 'etternavn', 'telefonnr', 'epost'];
for (var i = 0; i < billetter.length; i++) {
  $('table').append('<tr></tr>');
  for (var j = 0; j < cols.length; j++) {
    $('table tr:last-child').append('<td>' + billetter[i][cols[j]] + '</td>');
  }
}    
}
function slettBillett(){
    billetter = []
}