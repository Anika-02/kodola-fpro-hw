const apiKey = '5d066958a60d315387d9492393935c19';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Dnipro&units=metric&APPID=${apiKey}`;

const city = document.querySelector('#city');
const temperature = document.querySelector('#temperature');
const pressure = document.querySelector('#pressure');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const windDirection = document.querySelector('#wind-direction');
const weatherIcon = document.querySelector('#weather-icon');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        city.textContent = data.name;
        temperature.textContent = data.main.temp;
        pressure.textContent = data.main.pressure;
        description.textContent = data.weather[0].description;
        humidity.textContent = data.main.humidity;
        windSpeed.textContent = data.wind.speed;
        windDirection.textContent = data.wind.deg;
        weatherIcon.src = `http://openweathermap.org/img/w/10d.png`;
    })
    .catch(error => {
        console.error('Помилка отримання даних погоди: ', error);
    });