const weather = document.querySelector(".js-weather");

const API_KEY = "629dfcedd7e5ae9c7ca5b325da4742b6";
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric` //나 위도와 경도와 나의 key를 입력, units=metric은 섭씨단위이다.
        ).then(function(response){
            return response.json()
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj){ //위도와 경도를 불러온다
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function hadnleGeoError() {
    console.log(`Can't access geo location`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, hadnleGeoError); //위치를 알 수 있다. navigator을 통해서
    //위치를 찾을 수 있다
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords); //내 위치를 obj로 입력해서 보여준다
        getWeather(parsedCoords.latitude, parsedCoords.longitude); //위도와 경도를 보여준다.
    }
}



function init(){
    loadCoords();
}

init();