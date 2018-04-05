import React, { Component } from "react";
import { connect } from "react-redux";

class Repos extends Component {
  componentDidMount() {
    let { dispatch } = this.props;

    fetch(
      `https://api.github.com/users/${
        this.props.username
      }/repos?access_token=2c093c530e194073e297f8323a3aeb4871e3c993`
    )
      .then(res => res.json())
      .then(repos => {
        dispatch({ type: "UPDATE_REPOS", repos });
      });
  }

  render() {
    return (
      <div className="row">
        {this.props.repos.map(repo => (
          <div key={repo.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="btn btn-primary"
                >
                  See repo
                </a>
              </div>
            </div>
          </div>
        ))}
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

export default connect(mapStateToProps)(Repos);
