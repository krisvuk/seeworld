import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header';
import SearchBox from './SearchBox';
import Images from './Images';
import IntroSequence from './IntroSequence';
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
      data: {}
    };

    setTimeout(() => {
      this.loadSearchBox();
      this.loadHeader();
    },12000);

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
        <div id="loading-box">
          <IntroSequence />
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
