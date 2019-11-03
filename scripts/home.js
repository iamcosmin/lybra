function openBar() {
  var x = document.getElementById("navigate");
  var body = document.getElementById("body");
  if (x.className === "navigationBar") {
    x.className += " responsive";
    body.style.overflow = "hidden";
  } else {
    x.className = "navigationBar";
    body.style.overflowY = "scroll";
  }
}