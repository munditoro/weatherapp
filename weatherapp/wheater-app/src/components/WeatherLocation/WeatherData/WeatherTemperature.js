import React from "react";
import WeatherIcons from 'react-weathericons';
import { 
    CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE
 } from './../../../constants/weathers';
 import PropTypes from "prop-types";
 import "./styles.css";

const icons = {
    [SUN]: 'day-sunny',
    [CLOUD]: 'cloud',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
}

const sizeIcon = "3x";

const getWeatherIcon = weatherstate => {
    const icon = icons[weatherstate];
    if (icon) 
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
        return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon}/>
}

const WeatherTemperature = ({temperature, weatherstate})=>{
    return(
        <div className="weatherTemperatureCont">
            <span className="temperature">{
                getWeatherIcon(weatherstate)
            }</span>
            <span className="temperatureType">{`${temperature} C°`}</span>
        </div>
    )
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired
}

export default WeatherTemperature;