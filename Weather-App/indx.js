const apikey = "bc2b38990523ab0d1e964d8eb4a3e8f0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbtn = document.querySelector(".search button");

async function check(city) {
  const res = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "./images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  const search = document.querySelector(".search input").value;
  check(search);
});
