import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

import Header from "./components/Header";
import Profile from "./components/Profile";

class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props;

    fetch(
      `https://api.github.com/users/${
        this.props.username
      }?access_token=2c093c530e194073e297f8323a3aeb4871e3c993`
    )
      .then(res => res.json())
      .then(profile => {
        dispatch({ type: "UPDATE_PROFILE", profile });
      });
    console.log("Profiles:", this.props.profile);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Profile />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    profile: state.profile,
    repos: state.repos
  };
};

export default connect(mapStateToProps)(App);
