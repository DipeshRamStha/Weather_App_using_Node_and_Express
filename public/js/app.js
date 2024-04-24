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
