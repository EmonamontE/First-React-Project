import React from "react"
import Info from "./info"
import Form from "./form"
import WeatherInfo from "./weather"

const WEATHER_API_KEY = '2a98abfcb240a8da3fccdf3ffcc2d99b';

class Weather extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    const data = await response.json();

    if(response.ok) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        pressure: undefined,
        error: 'Город не введен или не найден'
      })
    }
  }

  render() {
    return(
      <div className="container">
        <Info/>
        <Form className="form" weatherMethod={this.gettingWeather} />
        <WeatherInfo 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          wind={this.state.wind}
          pressure={this.state.pressure}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Weather;
