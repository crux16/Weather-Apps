const API_KEY = '6d58dd1d0c89ba0a8e87723002ac6b55';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const weather_API = ({lat,lon}) => {
    return fetch(`${BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      });
}

export const currentWeather_API = ({lat,lon}) => {
    return fetch(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      });
}