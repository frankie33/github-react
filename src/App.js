import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

import Header from "./components/Header";
import Profile from "./components/Profile";

class App extends Component {
  handleChange = e => {
    let { dispatch } = this.props;
    dispatch({ type: "UPDATE_USERNAME", username: e.target.value });
    console.log(this.props);
  };

  render() {
    return (
      <div>
        {this.props.username}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.user}
        />
        <Header user={this.props.username} />
        <div className="container">
          <Profile user="frankie33" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos
  };
};

export default connect(mapStateToProps)(App);
