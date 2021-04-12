function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

let apiKey = "15ebfc2dd8844ab614a089875bddc59e";
let apiUrl = `htpps://api.openweathermap.org/data/2.5/weather?q=
Edinburgh,uk&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
