import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  handleChange = e => {
    let { dispatch } = this.props;
    dispatch({ type: "UPDATE_USERNAME", username: e.target.value });
  };

  fetchRepos = () => {
    let { dispatch } = this.props;

    fetch(`https://api.github.com/users/${this.props.username}/repos`)
      .then(res => res.json())
      .then(repos => {
        dispatch({ type: "UPDATE_REPOS", repos });
      });

    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(res => res.json())
      .then(profile => {
        dispatch({ type: "UPDATE_PROFILE", profile });
      });

    console.log(this.props);
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">
            Github App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <span className="sr-only">Home</span>
                </a>
              </li>
            </ul>
            <div className="form-inline mt-2 mt-md-0">
              <input
                name="search"
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                value={this.props.username}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.fetchRepos}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      </header>
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

export default connect(mapStateToProps)(Header);
