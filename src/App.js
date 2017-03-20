import React, { Component } from 'react';
import Header from './Header';
import $ from 'jquery';

import jvectormap from 'jvectormap'

import SeeWorldLogo from '../assets/seeWorldLogo.png';
import WorldMap from '../assets/worldMap.jpg';

var appStyle = {
  position: "absolute",
  backgroundImage: 'url('+WorldMap+')',
  backgroundPosition: 'center',
  width: window.innerWidth,
  height: window.innerHeight
};

var headerStyle = {
  display: "none"
};

var loadingLogoStyle = {
  display: "inline-block",
  width: "200px"
};

var loadingStyle = {
  display: "block",
  textAlign: "center",
  marginTop: "300px"
};

var welcomeMessageStyle = {
  fontFamily: "'Oregano', cursive",
  fontSize: "2em",
  color: "#eee",
  marginTop: "300px",
  display: "none",
  textAlign: "center"
};

var mapStyle = {
  width: "600px",
  height: "450px"
};

class App extends Component {


  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount () {
    this.loadingAnimation();
    this.mockFetchData();
    $('#world-map').jvectormap({map: 'world_mill'});
  }

  loadingAnimation () {
    this.intervalId = setInterval(() => {
      this.toggle = !this.toggle;
      $("#loading-box").stop().fadeTo(1000, this.toggle ? 0.2 : 1);
    }, 1000);
  }

  loadHeader () {
    $("#header").fadeIn(1000);
  }

  loadMap () {

  }

  removeLoading () {
    clearInterval(this.intervalId);
    $("#loading-box").fadeOut(() => {
    }, () => {
      this.showWelcomeMessage();
    });
  }

  removeWelcomeMessage () {
    $("#welcome-message").fadeOut(2000, () => {
      this.loadHeader();
    });
  }

  showWelcomeMessage () {
    $("#welcome-message").fadeIn(2000, () => {
      setTimeout(() => {
        this.removeWelcomeMessage();
      }, 2000);
    });
  }

  checkLoading () {
    if (!this.state.loading) {
      this.removeLoading();
    }
  }

  // simulates 5 seconds of data gathering
  mockFetchData () {
    setTimeout(() => {
      this.setState({loading: false});
    }, 5000);
  }

  render () {

    this.checkLoading();

    return (
      <div style={ appStyle }>
        <div id="header" style={ headerStyle }>
          <Header />
        </div>
        <div id="loading-box" style={ loadingStyle }>
          <img style={ loadingLogoStyle } src={SeeWorldLogo} />
        </div>
        <div id="welcome-message" style={ welcomeMessageStyle }><span>Discover</span> <span>&</span> <span>Explore</span></div>
        <div id="world-map" style={ mapStyle }></div>      
      </div>
    );
  }
}

export default App;
