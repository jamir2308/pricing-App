import React from "react";
import ReactDOM from "react-dom";
import PricingPage from "./containers/PricingPages";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <h1>my pricing App</h1>,
//   document.getElementById("app-pricing")
// );

ReactDOM.render(<PricingPage />, document.getElementById("app-pricing"));
