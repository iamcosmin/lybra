window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".description");
  let temperatureDegree = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".timezone");
  let temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7374cf8473fde4c43ac651a22cd116d5`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.warn(data);
          const { temp } = data.main;
          const { description, main, icon } = data.weather[0];
          //Set DOM Elements from the API
          const fintemp = temp - 273.15;
          temperatureDegree.textContent = Math.floor(fintemp);
          locationTimezone.textContent =
            data.name + "," + " ‍ " + data.sys.country;
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
  }
});
