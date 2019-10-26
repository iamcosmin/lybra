function openNavBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
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