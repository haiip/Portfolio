import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

const Project = ({ title, imgUrl }) => (
  <Card shadow={5} style={{ minWidth: "450", margin: "8px" }}>
    <CardTitle
      style={{
        color: "#fff",
        height: "176px",
        background: "url(" + imgUrl + ") center / cover"
      }}
    >
      {title}
    </CardTitle>
    <CardText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled
    </CardText>
    <CardActions border>
      <Button colored style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        GitHub
      </Button>
      <Button colored style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        Codepen
      </Button>
      <Button colored style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        LiveDemo
      </Button>
    </CardActions>
    <CardMenu style={{ color: "#fff" }}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
);

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}

          <Project
            title="React project 1"
            imgUrl="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
          />
          <Project
            title="React project 2"
            imgUrl="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
          />
          <Project
            title="React project 3"
            imgUrl="https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png"
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}
          <Project
            title="Angular project 3"
            imgUrl="https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg"
          />
          <Project
            title="Angular project 3"
            imgUrl="https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg"
          />
          <Project
            title="Angular project 3"
            imgUrl="https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg"
          />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}
          <Project
            title="VueJS Project 1"
            imgUrl="https://mellisdesigns.com/content/images/size/w2000/2018/11/VueLogo.jpg"
          />
          <Project
            title="VueJS Project 2"
            imgUrl="https://mellisdesigns.com/content/images/size/w2000/2018/11/VueLogo.jpg"
          />
          <Project
            title="VueJS Project 3"
            imgUrl="https://mellisdesigns.com/content/images/size/w2000/2018/11/VueLogo.jpg"
          />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}
          <Project
            title="MongoDB"
            imgUrl="https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png"
          />
          <Project
            title="MongoDB"
            imgUrl="https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png"
          />
          <Project
            title="MongoDB"
            imgUrl="https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png"
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
