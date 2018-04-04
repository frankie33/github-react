import React, { Component } from "react";

class Repos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.user}/repos`)
      .then(res => res.json())
      .then(repos => this.setState({ repos: repos }))
      .catch(err => console.log(err));

    console.log(this.state.repos);
  }

  render() {
    return (
      <div className="row">
        {this.state.repos.map(repo => (
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

export default Repos;
