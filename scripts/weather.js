window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".description");
  let temperatureDegree = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".timezone");
  let tempMin = document.querySelector(".temp-min");
  let tempMax = document.querySelector(".temp-max");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      alert(long);
      alert(lat);
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7374cf8473fde4c43ac651a22cd116d5`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { main } = data.weather[0];

          temperatureDegree.textContent =
            Math.floor(data.main.temp - 273.15) + "°C";

          locationTimezone.textContent =
            data.name + "," + " " + data.sys.country;

          tempMax.textContent =
            "Maxima de" + " " + Math.floor(data.main.temp_min - 273.15) + "°C";

          tempMin.textContent =
            "Minima de" + " " + Math.floor(data.main.temp_max - 273.15) + "°C";

          if (main == "Thunderstorm") {
            temperatureDescription.textContent = "Furtuni";
          } else if (main == "Drizzle") {
            temperatureDescription.textContent = "Burniță";
          } else if (main == "Rain") {
            temperatureDescription.textContent = "Plouă";
          } else if (main == "Snow") {
            temperatureDescription.textContent = "Ninge";
          } else if (main == "Mist") {
            temperatureDescription.textContent = "Aburi";
          } else if (main == "Smoke") {
            temperatureDescription.textContent = "Fum";
          } else if (main == "Haze") {
            temperatureDescription.textContent = "Ceață";
          } else if (main == "Dust") {
            temperatureDescription.textContent = "Praf";
          } else if (main == "Ash") {
            temperatureDescription.textContent = "Cenușă Vulcanică";
          } else if (main == "Squall") {
            temperatureDescription.textContent = "Vijelie";
          } else if (main == "Tornado") {
            temperatureDescription.textContent = "Tornadă";
          } else if (main == "Clear") {
            temperatureDescription.textContent = "Senin";
          } else if (main == "Clouds") {
            temperatureDescription.textContent = "Noros";
          }
        });
    });
  } else {
    console.error("PULA MEA!");
  }
});
