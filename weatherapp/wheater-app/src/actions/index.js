import TransformForecast from './../components/services/TransformForecast';
import transformWeather from './../components/services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WHEATER_CITY';

const setCity = payload => ({type: SET_CITY, payload});

const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const api_key = "1a04ef81729ee24e93093536afe6f2f1";
export const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});

const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_weather}?q=${payload}&appId=${api_key}`;

        //activar en el estado de un indicador de busqueda de datos

        dispatch(setCity(payload));

        return fetch(url_forecast).then(
                data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = TransformForecast(weather_data);

                    //modificar el estado con el resultado de la promesa {fetch}

                    dispatch(setForecastData({city: payload, forecastData}));
                }
            );
    };
};


export const setWeather = payload => {

    return dispatch =>{
        payload.forEach(city => {

            dispatch(getWeatherCity(city));
            const api_weather = `${url_weather}/q=${city}&appid=${api_key}`;
            fetch(api_weather).then( resolve => {
                return resolve.json();
            }).then( data => {
                const weather = transformWeather(data);
                
                dispatch(setWeatherCity(city, weather));
            });
        });
    }
}