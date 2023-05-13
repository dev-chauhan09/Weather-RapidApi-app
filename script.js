const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '594fb95f10mshb40e79641df9508p136874jsnf617fa9af868',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{ 

    // let city = document.getElementById("city")
    cityName.innerHTML = city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
        
           console.log(response)
    
    

           temp.innerHTML = response.temp
           temp1.innerHTML = response.temp
           feels_like.innerHTML = response.feels_like
           humidity.innerHTML = response.humidity
           humidity1.innerHTML = response.humidity
           min_temp.innerHTML = response.min_temp
           max_temp.innerHTML = response.max_temp
           wind_speed.innerHTML = response.wind_speed
           wind_speed1.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
cloud_pct.innerHTML = response.cloud_pct


})
.catch(err => console.error(err));


}

submits.addEventListener("click",(e) => {
e.preventDefault()

getWeather(city.value)
})



getWeather("Delhi")
