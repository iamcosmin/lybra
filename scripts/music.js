function openBar() {
  var x = document.getElementById("navigate");
  var body = document.getElementById("body");
  if (x.className === "navigatore") {
    x.className += " responsive";
    body.style.overflow = "hidden";
  } else {
    x.className = "navigatore";
    body.style.overflowY = "scroll";
  }
}
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
