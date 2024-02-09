const API_KEY = '6d58dd1d0c89ba0a8e87723002ac6b55';
const BASE_URL = 'https://api.openweathermap.org/geo/1.0/direct';


export const geoAPI = ({city}) => {
    return fetch(`${BASE_URL}?q=${city}&limit=5&appid=${API_KEY}`).then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
    });
}