window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".description");
  let temperatureDegree = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".timezone");
  let tempMin = document.querySelector(".temp-min");
  let tempMax = document.querySelector(".temp-max");
  navigator.permissions.query({ name: "geolocation" }).then(function(result) {
    if (result.state == "granted") {
      alert(result.state);
    } else if (result.state == "prompt") {
      alert(result.state);
      navigator.geolocation.getCurrentPosition();
    } else if (result.state == "denied") {
      alert(result.state);
    }
  });
});
