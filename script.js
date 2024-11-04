const options = {
method: "GET",
headers: {
"content-type": "application/octet-stream",
"X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
}
};

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow", options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

const apiKey = "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864";
const apiUrl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
	const response = await fetch(apiUrl+city, options);
	var data = await response.json();

	if(response.status == 404 || response.status == 400){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";

	}else{


	document.querySelector(".city").innerHTML = city.toUpperCase();
	document.querySelector(".temp").innerHTML = data.temp+"°C";
	document.querySelector(".humidity").innerHTML = data.humidity+"% <br />Humidity";
	document.querySelector(".wind").innerHTML = data.wind_speed+" km/h<br />Wind Speed";
	document.querySelector(".cloud_pct").innerHTML = "Cloud Percentage: " + data.cloud_pct+"%";

	document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
 }
}

searchBtn.addEventListener('click',()=>{
	checkWeather(searchBox.value);
})
