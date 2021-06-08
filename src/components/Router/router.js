import React from "react"
import Weather from "../Weather/WeatherGlobal"
import Time from "../Time/CurrentTime"
import PublicLayout from "../Layout/PublicLayout"
import Greeting from "../greeting"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

class Switcher extends React.Component {
  render() {
    return(
      <Router>
        <Route 
          path='/'
          component={PublicLayout}
        />
        <Route 
          path='/greeting'
          component={Greeting}
        />
        <Route 
          path='/time'
          component={Time}
        />
        <Route 
          path='/weather'
          component={Weather}
        />
      </Router>
    );
  }
}

export default Switcher;
