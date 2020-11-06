import React, { Component } from "react";
import {
  Grid,
  Cell,
  Spinner,
  List,
  ListItem,
  ListItemContent,
  ListItemAction,
  Icon,
} from "react-mdl";
import { Avatar } from "../common/avatar";
import { getRespositories } from "../../api";

const Repository = ({ name, avatar_url, html_url, description }) => (
  <ListItem threeLine>
    <ListItemContent
      avatar={<img src={avatar_url} />}
      subtitle={description}
      style={{ textAlign: "center" }}
    >
      {name}
    </ListItemContent>
    <ListItemAction>
      <a href={html_url}>
        <Icon name="star" />
      </a>
    </ListItemAction>
  </ListItem>
);

class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      repos: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    getRespositories().then((repos) => {
      this.setState({ loading: false, repos });
      console.log("repos");
    });
  }
  renderRepositories() {
    if (this.state.loading) {
      return <Spinner />;
    }
    const items = this.state.repos.map((r) => (
      <Repository
        key={r.id}
        name={r.name}
        html_url={r.html_url}
        avatar_url={r.owner.avatar_url}
      />
    ));
    return (
      <List
        className=""
        style={{
          width: "150",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {items}
      </List>
    );
  }

  render() {
    console.log(this.state.loading);
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <Avatar />
            <div className="banner-text">
              <h1>Frontend Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | JavaScript | React</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/nick-magnusson"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/haiip"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtybe */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
          {this.renderRepositories()}
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
