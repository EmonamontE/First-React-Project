import React from "react"

class WeatherInfo extends React.Component {
  render() {
    return(
      <div className="fs-4">
        { this.props.city &&
          <div>
            <p>Местоположение: {this.props.city}, {this.props.country}</p>
            <p>Температура: {this.props.temp}</p>
            <p>Ветер: {this.props.wind} м/с</p>
            <p>Атмосферное давление: {this.props.pressure} мм</p>
          </div>
        }
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default WeatherInfo;
