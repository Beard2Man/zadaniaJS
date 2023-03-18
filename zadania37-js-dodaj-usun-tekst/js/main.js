let dodaj = document.getElementById("dodaj");
let usun = document.getElementById("usun");

dodaj.addEventListener("click", function () {
  document.getElementById("tekst").innerHTML = "Hej";
});

usun.addEventListener("click", function () {
  document.getElementById("tekst").innerHTML = "";
});
