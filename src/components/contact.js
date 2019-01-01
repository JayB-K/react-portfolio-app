import React, { Component } from "react";
import "../css/contact.css";
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>JayB</h2>
            <img className="contact-avatar-img" src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </Cell>
          <Cell col={6}></Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
