import { Weather } from "../../interfaces/weather";




export default function parseWeatherData(weatherObj:any): Weather{
    console.log(weatherObj);
    return{
        weatherStatus: weatherObj.weather[0].main,
        weatherDescription: weatherObj.weather[0].description,
        pressure: weatherObj.main.pressure,
        temp: weatherObj.main.temp,
        humidity: weatherObj.main.humidity,
        temp_max: weatherObj.main.temp_max,
        temp_min: weatherObj.main.temp_min
    }
}