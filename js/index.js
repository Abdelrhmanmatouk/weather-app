let searchBtn = document.getElementById("search-btn");
let Input = document.getElementById("search-bar");
let weatherData;
let date = new Date();
let month = date.toString().slice(4, 10);

searchBtn.addEventListener("click", displayweather);
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      displayweather();
    }
  });

async function weather() {
  weatherData = [];
  let city = Input.value;
  let geoCodingApi = `https://api.weatherapi.com/v1/forecast.json?key=ece9b21ec6724bd0abf152053230908&q=${city}&days=3&aqi=no&alerts=no`;

  let response = await fetch(geoCodingApi);
  let data = await response.json();
  weatherData.push(data);
  console.log(data);
}

async function displayweather() {
  await weather();
  Day1();
  Day2();
  Day3();
}

function Day1() {
  let name = weatherData[0].location.name;
  let text = weatherData[0].current.condition.text;
  let icon = weatherData[0].current.condition.icon;
  let temp_c = weatherData[0].current.temp_c;
  let humidity = weatherData[0].current.humidity;
  let wind_kph = weatherData[0].current.wind_kph;
  let wind_dir = weatherData[0].current.wind_dir;

  let date = new Date();
  let day = date.toString().slice(0, 3);
  let month = date.toString().slice(4, 10);

  document.querySelector(".today").innerHTML = day;
  document.querySelector(".month").innerHTML = month;
  document.querySelector(".city").innerHTML = "weather in " + name;
  document.querySelector(".description").innerHTML = text;
  document.querySelector(".icon").src = icon;
  document.querySelector(".temp").innerHTML = temp_c + "°C";
  document.querySelector(".hummdity").innerHTML =
    "humidity : " + humidity + " %";
  document.querySelector(".wind").innerHTML =
    "wind speed : " + wind_kph + " km/h  " + wind_dir;

  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
  document.querySelector(".weather").classList.remove("loading");
}
function Day2() {
  let name = weatherData[0].location.name;
  let text = weatherData[0].forecast.forecastday[1].day.condition.text;
  let icon = weatherData[0].forecast.forecastday[1].day.condition.icon;
  let temp_c = weatherData[0].forecast.forecastday[1].day.maxtemp_c;
  let humidity = weatherData[0].forecast.forecastday[1].day.avghumidity;
  let wind_kph = weatherData[0].forecast.forecastday[1].day.maxwind_kph;

  let today = new Date();
  let tommorow = new Date(today);
  tommorow.setDate(today.getDate() + 1);

  let day = tommorow.toString().slice(0, 3);

  document.querySelector(".today.day1").innerHTML = day;
  document.querySelector(".month.day1").innerHTML = month;
  document.querySelector(".city.day1").innerHTML = "weather in " + name;
  document.querySelector(".description.day1").innerHTML = text;
  document.querySelector(".icon.day1").src = icon;
  document.querySelector(".temp.day1").innerHTML = temp_c + "°C";
  document.querySelector(".hummdity.day1").innerHTML =
    "humidity : " + humidity + " %";
  document.querySelector(".wind.day1").innerHTML =
    "wind speed : " + wind_kph + " km/h  ";
  document.querySelector(".weather.day1").classList.remove("loading");
}
function Day3() {
  let name = weatherData[0].location.name;
  let text = weatherData[0].forecast.forecastday[2].day.condition.text;
  let icon = weatherData[0].forecast.forecastday[2].day.condition.icon;
  let temp_c = weatherData[0].forecast.forecastday[2].day.maxtemp_c;
  let humidity = weatherData[0].forecast.forecastday[2].day.avghumidity;
  let wind_kph = weatherData[0].forecast.forecastday[2].day.maxwind_kph;

  let today = new Date();
  let tommorow = new Date(today);
  tommorow.setDate(today.getDate() + 2);
  let day = tommorow.toString().slice(0, 3);

  document.querySelector(".today.day2").innerHTML = day;
  document.querySelector(".month.day2").innerHTML = month;
  document.querySelector(".city.day2").innerHTML = "weather in " + name;
  document.querySelector(".description.day2").innerHTML = text;
  document.querySelector(".icon.day2").src = icon;
  document.querySelector(".temp.day2").innerHTML = temp_c + "°C";
  document.querySelector(".hummdity.day2").innerHTML =
    "humidity : " + humidity + " %";
  document.querySelector(".wind.day2").innerHTML =
    "wind speed : " + wind_kph + " km/h  ";
  document.querySelector(".weather.day2").classList.remove("loading");
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        let lat = position.coords.latitude;
        console.log(`lat=${lat}`);
        let lon = position.coords.longitude;
        console.log(`lon=${lon}`);
        coords = lat + "," + lon;
        console.log(coords);
        Input.value = coords;
        displayweather();
        Input.value = "";
      },
      function (error) {
        console.log(error);
      }
    );
  }
}

getLocation();

// let weatherData =[] مش شغااااااال
// let weather = {
//   apikey: "ece9b21ec6724bd0abf152053230908",
//   fetchweather: function (city) {

//     fetch(
//       `https://api.weatherapi.com/v1/forecast.json?key=ece9b21ec6724bd0abf152053230908&q=${city}&days=3&aqi=no&alerts=no`
//     )
//       .then((Response) => Response.json())

//       .then((data) =>  weatherData.push(data));

//   },
//   displayweather: function (data) {
//     let { name } = weatherData[0].location.name;
//     let { icon, text } = data.current.condition;
//     let { temp_c } = data.current;
//     let { humidity } = data.current;
//     let { wind_kph, wind_dir } = data.current;
//     document.querySelector(".city").innerHTML = "weather in " + name;
//     document.querySelector(".description").innerHTML = text;
//     document.querySelector(".icon").src = icon;
//     document.querySelector(".temp").innerHTML = temp_c + "°C";
//     document.querySelector(".hummdity").innerHTML =
//       "humidity : " + humidity + " %";
//     document.querySelector(".wind").innerHTML =
//       "wind speed : " + wind_kph + " km/h  " + wind_dir;
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage =
//       "url('https://source.unsplash.com/1600x900/?" + name + "')";
//   },
//   search: function () {
//     this.fetchweather(document.querySelector(".search-bar").value);
//   },
// };

// let geocode = {
//   reversegeocode: function (latitude, longitude) {
//     var api_key = "d6fb68e624384cbfaf2884e4f8ed4865";

//     // reverse geocoding example (coordinates to address)

//     var query = latitude + "," + longitude;

//     // forward geocoding example (address to coordinate)
//     // var query = 'Philipsbornstr. 2, 30165 Hannover, Germany';
//     // note: query needs to be URI encoded (see below)

//     var api_url = "https://api.opencagedata.com/geocode/v1/json";

//     var request_url =
//       api_url +
//       "?" +
//       "key=" +
//       api_key +
//       "&q=" +
//       encodeURIComponent(query) +
//       "&pretty=1" +
//       "&no_annotations=1";

//     // see full list of required and optional parameters:
//     // https://opencagedata.com/api#forward

//     var request = new XMLHttpRequest();
//     request.open("GET", request_url, true);

//     request.onload = function () {
//       // see full list of possible response codes:
//       // https://opencagedata.com/api#codes

//       if (request.status === 200) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         // print the location
//         weather.fetchweather(data.results[0].components.city);
//       } else if (request.status <= 500) {
//         // We reached our target server, but it returned an error

//         console.log("unable to geocode! Response code: " + request.status);
//         var data = JSON.parse(request.responseText);
//         console.log("error msg: " + data.status.message);
//       } else {
//         console.log("server error");
//       }
//     };

//     request.onerror = function () {
//       // There was a connection error of some sort
//       console.log("unable to connect to server");
//     };

//     request.send(); // make the request
//   },
//   getlocation: function () {
//     function Success(data) {
//       geocode.reversegeocode(data.coords.latitude, data.coords.longitude);
//     }
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(Success, console.error);
//     } else {
//       weather.fetchweather("cairo");
//     }
//   },
// };

// document.querySelector(".search button").addEventListener("click", function () {
//   weather.search();
// });
// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });
// geocode.getlocation();

