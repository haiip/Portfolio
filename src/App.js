import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link to="/" className="mdl-navigation__link">
                  Portfolio
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link to="/" className="mdl-navigation__link">
                  Portfolio
                </Link>
              }
            >
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
