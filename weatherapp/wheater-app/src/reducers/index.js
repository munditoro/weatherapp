import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, getForecastDataCities as _getForecastDataCities,
    getWeatherCities as _getWeatherCities } from './cities';
import { city } from './city';


export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state => state.city, city => city);
export const getForecastDataCities = createSelector(state => state.cities, getCity, _getForecastDataCities );
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);