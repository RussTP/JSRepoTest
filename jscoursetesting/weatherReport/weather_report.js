function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'ed0d0bbabc31f569147c76f7c6e74384';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiLongLatUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


    fetch(apiLongLatUrl)
    .then(response => response.json())
    .then (data => {
       const weatherInfoLongLat = document.getElementById('weatherInfoLongLat');
       weatherInfoLongLat.innerHTML = `<h2>Weather in ${data.name}</h2>
       <p>Temperature: ${data.main.temp} &#8451;</p>
       <p>Weather: ${data.weather[0].description}</p>`;
    })

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );