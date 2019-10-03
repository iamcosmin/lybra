// Maintanance Break Tool
const maintanance = "long";
let main = document.getElementById("main");
let maintatancePack = document.getElementById("maintanance");
let maintananceHeader = document.querySelector("h1");
let maintananceParagraph = document.querySelector("p");

if (maintanance == "long") {
  main.style.display = "none";
  maintananceHeader.textContent = "Mentenanță în curs!";
  maintananceParagraph.textContent = "Vom fi înapoi în 1 oră.";
} else if (maintanance == "short") {
  main.style.display = "none";
  maintananceHeader.textContent = "Mentenanță în curs!";
  maintananceParagraph.textContent =
    "Vom fi înapoi în mai puțin de 30 de minute.";
} else if (maintanance == "hotfix") {
  main.style.display = "none";
  maintananceHeader.textContent = "Mentenanță în curs!";
  maintananceParagraph.textContent =
    "Trebuie să rezolvăm o problemă critică. Va dura ceva.";
} else if (maintanance == "scheduled") {
  alert("Site-ul se închide în 5 minute pentru o scurtă mentenanță.");
} else if (maintanance == "none") {
  console.log("Nicio mentenanta planificata");
  maintatancePack.style.display = "none";
}
//End of Maintanance Break Tool

//Dark Mode Tool

function activateDark() {
  localStorage.setItem(
    "mode",
    (localStorage.getItem("mode") || "dark") === "dark" ? "light" : "dark"
  );
  localStorage.getItem("mode") === "dark"
    ? document.querySelector("body").classList.add("dark")
    : document.querySelector("body").classList.remove("dark");
}
document.addEventListener("DOMContentLoaded", event => {
  (localStorage.getItem("mode") || "dark") === "dark"
    ? document.querySelector("body").classList.add("dark")
    : document.querySelector("body").classList.remove("dark");
});
//End of Dark Mode Tool

//Toggle NavBar Tool
function openNavBar() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//End of Toggle NavBar Tool
