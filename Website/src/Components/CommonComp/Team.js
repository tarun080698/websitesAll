import React, { Component } from "react";
import TeamItem from "./TeamItem";
import image from "../../assets/img/team1.png";

const team_options = [
  { image: image, name: "Tarun Dadlani", position: "Associate System Engineer", fb: "https://www.facebook.com/tarun.dadlani.5/", linkedin: "https://www.linkedin.com/in/tarun-dadlani/", github: "https://github.com/tarun080698", description: "qwertyuiopojhgfd fdcfvgbhjhgtfdsdfghj jhgfdcfvbhjhgfd cvkjhgfdxcvbn" },
]
export class team extends Component {
  render() {
    return (
      <div>

        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="row">
              {team_options.map((member, id) => {
                return <TeamItem {...member} key={id}/>
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default team;
