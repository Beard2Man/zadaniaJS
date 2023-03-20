let imie = document.querySelector("#imie");
console.log(imie);

// let nazw = document.getElementById("nazwisko");
// console.log(nazw.value);

// let tel = document.getElementById("telefon");
// console.log(tel.value);

function getData() {
  let imie = document.getElementById("imie");
  console.log(imie);
  let pName = document.getElementById("name");
  pName.innerText = imie.value;

  let nazw = document.getElementById("nazwisko");
  console.log(nazw.value);
  let pSurname = document.getElementById("surname");
  pSurname.innerText = nazw.value;

  let tel = document.getElementById("telefon");
  console.log(tel.value);
  let pPhone = document.getElementById("phone");
  pPhone.innerText = tel.value;
}

document.querySelector("button").addEventListener("click", getData);
