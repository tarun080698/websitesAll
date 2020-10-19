import React, { Component } from 'react'

class TeamItem extends Component {
    render() {
        return (
            <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={this.props.image}
                alt=""
              />
              <h4>{this.props.name}</h4>
              <p className="text-muted">{this.props.position}</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href={this.props.fb} target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href={this.props.linkedin} target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href={this.props.github} target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="col-lg-8 mx-auto text-left">
              <p className="large text-muted">{this.props.description}</p>
            </div>
          </div>
        )
    }
}

export default TeamItem
