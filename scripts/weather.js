window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/6981364b3d2497d6e06a141a70deb78e/${lat}, ${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temperature, summary, icon } = data.currently;
          //Set DOM Elements from the API
          const fintemp = (temperature - 32) * (5 / 9);
          temperatureDegree.textContent = Math.floor(fintemp);
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          //formula celsius
          let celsius = (temperature - 32) * (5 / 9);
          //Set icon
          setIcons(icon, document.querySelector(".icon"));
        });
    });
  }
  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white", resizeClear: true });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
