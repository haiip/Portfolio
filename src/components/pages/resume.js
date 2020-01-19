import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../education";
import Experience from "../experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={"/Bitemoji1.png"}
                alt="avatar"
                style={{ height: "450px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Nick Magnusson</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Adress</h5>
            <p> Stockholm Sweden 18635</p>
            <h5>Phone</h5>
            <p>+(46)737738-450</p>
            <h5>Email</h5>
            <p>nick.magnusson@student.kyh.se</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2009}
              endYear={2012}
              schoolName="Vallentuna Gymnasium"
              schoolDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            />

            <Education
              startYear={2013}
              endYear={2015}
              schoolName="Katolska folkhögskolan"
              schoolDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2016}
              jobName="First job"
              jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
