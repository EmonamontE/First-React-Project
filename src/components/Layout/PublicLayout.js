import React from "react"
import Greeting from "../greeting"
import {
  Link
} from "react-router-dom"

class PublicLayout extends React.Component {
  render() {
    return(
      <div className="container">
        <header 
          className="d-flex flex-wrap justify-content py-3 mb-4 border-bottom"
        >
          <Link
            to='/greeting'
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Test Task Axbit</span>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item me-2">
              <Link
                to="/time"
                className="nav-link active"
              >
                Время
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                to="/weather"
                className="nav-link active"
              >
                Погода
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default PublicLayout;
