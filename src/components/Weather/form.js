import React from "react"

class Form extends React.Component {
  render() {
    return(
      <form 
        className="d-flex my-4"
        onSubmit={this.props.weatherMethod}
      >
        <input
          className="form-control me-2"
          type="text"
          name="city"
          placeholder="Название города"/>
        <button className="btn btn-primary">Показать погоду</button>
      </form>
    );
  }
}

export default Form;
