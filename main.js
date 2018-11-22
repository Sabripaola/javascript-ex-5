// Creare un oggetto che descriva uno studente con proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var alunno = {
  'nome': 'Francesco',
  'cognome': 'Basilico',
  'eta': 22,
}

for (var field in alunno)
 {
   document.writeln(alunno[field] + "<br>");
 }

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
var alunni = [
  {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'eta': 24,
  },
  {
    'nome': 'Lucia',
    'cognome': 'Colombo',
    'eta': 21,
  },
  {
    'nome': 'Carlo',
    'cognome': 'Barbieri',
    'eta': 19,
  },
]

for (var i = 0; i < alunni.length; i++) {
  document.writeln(alunni[i].nome + "<br>");
  document.writeln(alunni[i].cognome + "<br>");
  document.writeln(alunni[i].eta + "<br>");
}
// Dare all’utente 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newAlunno = {}
  newAlunno.nome = prompt("Inserire nome");
  newAlunno.cognome = prompt("Inserire cognomenome");
  newAlunno.età = parseInt(prompt("Inserire eta"));
console.log(newAlunno);
