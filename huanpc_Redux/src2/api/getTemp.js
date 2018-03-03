const Url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=a9cbff007036f08e19c2441af86e79a7&q=';

function getTemp(cityName) {
    return fetch(Url + cityName)
    .then(res => res.json())
    .then(resJson => resJson.main.temp);
}

export default getTemp;