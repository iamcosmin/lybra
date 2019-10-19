function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  const conectatH1 = document.querySelector(".welcome-h1");
  const conectatP = document.querySelector(".welcome-p");
  conectatH1.textContent = "Bine ai venit," + " " + profile.getGivenName();
  conectatP.textContent = "Acum, ai acces la toate serviciile.";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    const conectatH1 = document.querySelector(".welcome-h1");
    const conectatP = document.querySelector(".welcome-p");
    conectatH1.textContent = "Ai fost deconectat.";
    conectatP.textContent = "Pentru a te deconecta complet, reincarca pagina.";
  });
}
//   console.log("ID: " + profile.getId());
//   console.log("Full Name: " + profile.getName());
//   console.log("Given Name: " + profile.getGivenName());
//   console.log("Family Name: " + profile.getFamilyName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail());
