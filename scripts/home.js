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