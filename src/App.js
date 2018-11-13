import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '3ad64e085d1198a99a1bacacb459a9fe';

class App extends Component {
  state = {
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    speed: undefined,
    lat: undefined,
    lon: undefined,
    error: undefined
  }

  outputWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const response = await call.json();
  if (city && country) {
    console.log(response);
    this.setState({
      temperature: response.main.temp,
      pressure: response.main.pressure,
      humidity: response.main.humidity,
      city: response.name,
      country: response.sys.country,
      description: response.weather[0].description,
      speed: response.wind.speed,
      lat: response.coord.lat,
      lon: response.coord.lon,
      error: ""
    });
} else {
  this.setState({
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    speed: undefined,
    lat: undefined,
    lon: undefined,
    error: "Please enter the value."
    });
  }
}

  render() {
    return (
      <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Header />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form outputWeather={this.outputWeather} />
                    <Weather
                      temperature={this.state.temperature}
                      pressure={this.state.pressure}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      speed={this.state.speed}
                      lat={this.state.lat}
                      lon={this.state.lon}
                      error={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
