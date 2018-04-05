import React, { Component } from "react";
import { connect } from "react-redux";
import Repos from "../Repos";

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="img-fluid"
              src={this.props.profile.avatar_url}
              alt=""
            />
            <h3 className="mt-3">{this.props.profile.name}</h3>
            <h5 className="text-muted">@{this.props.profile.login}</h5>
            <p>{this.props.profile.bio}</p>
          </div>
          <div className="col-md-9">
            <Repos repos={this.props.repos} />
          </div>
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

export default connect(mapStateToProps)(Profile);
