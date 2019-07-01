import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity, setWeather } from './../actions';
import { getWeatherCities } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount(){
      this.props.setWheater(this.props.cities);
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
      }

    render() {
        return (
                <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
  }
  
  const mapDispatchToPropsActions = dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWheater: cities => dispatch(setWeather(cities))
  });

  const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);