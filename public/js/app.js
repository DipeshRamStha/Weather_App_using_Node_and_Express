var weatherApi = "/weather";
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const weatherIcon = document.querySelector(".weatherIcon i");
const weatherCondition = document.querySelector(".weatherCondition");
const tempElement = document.querySelector(".temperature span");

const locationElement = document.querySelector(".place");
const dateElement = document.querySelector(".date");

const currentDate = new Date();
const options = { month: "long" };
const monthName = currentDate.toLocaleString("en-US", options);

dateElement.textContent = currentDate.getDate() + ", " + monthName;

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(search.value);
  locationElement.textContent = "Loading...";
  weatherIcon.className = "";
  tempElement.textContent = "";
  weatherCondition.textContent = "";

  showData(search.value);
});

function showData(city) {
  getWeatherData(city, (result) => {
    console.log(result);
  });
}

function getWeatherData(city, callback) {
  const locationApi = weatherApi + "?address=" + city;
  fetch(locationApi).then((response) => {
    response.json().then((response) => {
      callback(response);
    });
  });
}
