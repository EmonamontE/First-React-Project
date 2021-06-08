import React from "react"

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Текущие дата и время:</h2> 
        <div className="fs-2">{this.state.time}</div>
      </div>
    );
  }
}

export default Time;
