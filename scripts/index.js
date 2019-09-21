alert("Momentan, Lybra este sub mentenanta. Incercati mai tarziu.");
function activateDark() {
  localStorage.setItem(
    "mode",
    (localStorage.getItem("mode") || "dark") === "dark" ? "light" : "dark"
  );
  localStorage.getItem("mode") === "dark"
    ? document.querySelector("body").classList.add("dark")
    : document.querySelector("body").classList.remove("dark");
  localStorage.getItem("mode") === "dark"
    ? document.querySelector(".line").classList.add("dark")
    : document.querySelector(".line").classList.remove("dark");
}
document.addEventListener("DOMContentLoaded", event => {
  (localStorage.getItem("mode") || "dark") === "dark"
    ? document.querySelector("body").classList.add("dark")
    : document.querySelector("body").classList.remove("dark");
  (localStorage.getItem("mode") || "dark") === "dark"
    ? document.querySelector(".line").classList.add("dark")
    : document.querySelector(".line").classList.remove("dark");
});
