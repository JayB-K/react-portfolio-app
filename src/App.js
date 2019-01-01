import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Router from './components/router';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<a className="header-my-portfolio" href="/">My Porfolio</a>} scroll>
            <Navigation className="nav-link">
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation className="nav-link">
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            {/* Router */}
            <Router />
          </Content>
        </Layout>
      </div>;
  }
}

export default App;
