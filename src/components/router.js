import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Router = () => (
    <Switch>
      <Route exact exact path="/" component={ Landing } />
      <Route exact path="/aboutme" component={ AboutMe } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/resume" component={ Resume } />
    </Switch>
)

export default Router;