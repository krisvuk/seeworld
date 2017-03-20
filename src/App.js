import React, { Component } from 'react';
import Loading from './Loading';
import $ from 'jquery';

import SeeWorldLogo from '../assets/seeWorldLogo.png';
import WorldMap from '../assets/worldMap.jpg';

var appStyle = {
  position: "absolute",
  backgroundImage: 'url('+WorldMap+')',
  backgroundPosition: 'center',
  width: window.innerWidth,
  height: window.innerHeight
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
  }

  loadingAnimation () {
    this.intervalId = setInterval(() => {
      this.toggle = !this.toggle;
      $("#loading-box").stop().fadeTo(1000, this.toggle ? 0.2 : 1);
    }, 1000);
  }

  removeLoading () {
    clearInterval(this.intervalId);
    $("#loading-box").fadeOut(() => {
    }, () => {
      this.showWelcomeMessage();
    });
  }

  removeWelcomeMessage () {
    $("#welcome-message").fadeOut(2000);
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
        <div id="loading-box" style={ loadingStyle }>
          <img style={ loadingLogoStyle } src={SeeWorldLogo} />
        </div>
        <div id="welcome-message" style={ welcomeMessageStyle }><span>Discover</span> <span>&</span> <span>Explore</span></div>        
      </div>
    );
  }
}

export default App;
