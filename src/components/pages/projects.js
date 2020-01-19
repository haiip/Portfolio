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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 1*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg) center / cover"
              }}
            >
              Angular Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg) center / cover"
              }}
            >
              Angular Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.ryadel.com/wp-content/uploads/2017/10/angular-logo.jpg) center / cover"
              }}
            >
              Angular Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://mellisdesigns.com/content/images/size/w2000/2018/11/VueLogo.jpg) center / cover"
              }}
            >
              VueJS Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://mellisdesigns.com/content/images/size/w2000/2018/11/VueLogo.jpg) center / cover"
              }}
            >
              VueJS Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://mellisdesigns.com/content/images/size/w2000/2018/11/VueLogo.jpg) center / cover"
              }}
            >
              VueJS Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div style={{ width: "80%", margin: "auto" }} className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png) center / cover"
              }}
            >
              MongoDB Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png) center / cover"
              }}
            >
              MongoDB Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3*/}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginLeft: "20px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://d18qs7yq39787j.cloudfront.net/uploads/company/478/MongoDB_logo.png) center / cover"
              }}
            >
              MongoDB Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </CardText>
            <CardActions border>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                GitHub
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                Codepen
              </Button>
              <Button
                colored
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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
