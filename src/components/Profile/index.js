import React, { Component } from "react";
import Repos from "../Repos";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.user}`)
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="img-fluid"
              src={this.state.user.avatar_url}
              alt=""
            />
            <h3 className="mt-3">@{this.state.user.login}</h3>
          </div>
          <div className="col-md-9">
            <Repos user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
