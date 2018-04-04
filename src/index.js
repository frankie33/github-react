import React from "react";
import { render } from "react-dom";
import "./style.css";

import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Profile user="frankie33" />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
