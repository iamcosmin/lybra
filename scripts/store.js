const body = document.getElementById("body");
body.style.display = "none";
netlifyIdentity.on("login", user => (body.style.display = "block"));
