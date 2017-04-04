import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header';
import SearchBox from './SearchBox';
import Images from './Images';
import SeeWorldLogo from '../assets/seeWorldLogo.png';
import WorldMapImage from '../assets/worldMap.jpg';

var appStyle = {
  position: "absolute",
  backgroundImage: 'url('+WorldMapImage+')',
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

var searchBoxStyle = {
  display: "none",
  textAlign: "center",
  marginTop: "300px"
};

var imagesContainerStyle = {
  width: "100%"
};

class App extends Component {


  constructor (props) {
    super(props);
    $("#world-map").fadeOut(2000);
    this.state = {
      loading: true,
      displayMap: false,
      data: {}
    };
    this.imageData = this.imageData.bind(this);
  }

  componentDidMount () {
    window.addEventListener('keydown', function(e) {
      if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    });
    $("body").keyup((event) => {
      if(event.keyCode === 32){
        this.removeImages();
      }
    });
    this.introSequence();
  }

  introSequence () {
    this.loadingAnimation();
    setTimeout(() => {
      this.removeLoading();
    }, 3000);
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

  removeLoading () {
    clearInterval(this.intervalId);
    $("#loading-box").fadeOut(() => {
      this.showWelcomeMessage();
    });
  }

  removeWelcomeMessage () {
    $("#welcome-message").fadeOut(2000, () => {
      this.loadHeader();
      this.loadSearchBox();
    });
  }

  showWelcomeMessage () {
    $("#welcome-message").fadeIn(3000, () => {
      this.removeWelcomeMessage();
    });
  }

  // simulates 5 seconds of data gathering
  mockFetchData () {
    setTimeout(() => {
      this.setState({loading: false,
                     displayMap: true});
    }, 3000);
  }

  loadSearchBox () {
    $("#search-box").fadeIn(1000);
  }

  removeImages () {
    $('#images-container').fadeOut(1000,() => {
      this.loadSearchBox();
    });
  }

  imageData (data) {
    this.setState({data: data});
    $('#images-container').fadeIn(1000);
  }

  render () {
    return (
      <div style={ appStyle }>
        <div id="header" style={ headerStyle }>
          <Header />
        </div>
        <div id="loading-box" style={ loadingStyle }>
          <img src={SeeWorldLogo} style={ loadingLogoStyle }/>
        </div>
        <div id="welcome-message" style={ welcomeMessageStyle }>
          Discover & Explore
        </div>
        <div id="search-box" style={ searchBoxStyle }>
          <SearchBox getImageData={ this.imageData }/>
        </div>
        <div id="images-container" style={ imagesContainerStyle }>
          <Images imageData={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
