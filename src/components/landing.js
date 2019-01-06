import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import "../css/landing.css";

class Landing extends Component {
    render() {
        return (
            <div className="main">
                <Grid className="landing-grid">
                <Cell col={12}>
                    <img className="avatar-img" src="https://pickaface.net/gallery/avatar/20141025_004121_918_Developer.png" alt="avatar"/>
                    <div className="banner-text">
                        <h1>Full Stack Devleloper</h1>
                        <hr/>
                        <p>Blockchain | Spring Boot | NodeJS Express | React | Android </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a href="http://github.com/JayB-K" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/* Freecodecamp */}
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>
                            {/* Youtube */}
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
                </Grid>
             </div>
        )
    }
}

export default Landing;