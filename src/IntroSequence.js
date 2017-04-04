import React, { Component } from 'react';
import $ from 'jquery';
import SeeWorldLogo from '../assets/seeWorldLogo.png';

var container = {

};

var logoStyle = {
 	width: "200px",
  display: "block",
  textAlign: "center",
  marginTop: "300px",
  display: "none",
  textAlign: "center"
};

var welcomeMessageStyle = {
  fontFamily: "'Oregano', cursive",
  fontSize: "2em",
  color: "#eee",
  marginTop: "300px",
  textAlign: "center",
  display: "none"
};

class IntroSequence extends Component {

	componentDidMount () {
		this.state = {
			loading: true
		};
		this.loadLogo();
	}

	loadLogo () {
		$("#logo").fadeIn(2000);
		setTimeout(() => {
			this.removeLogo();
		}, 2000);
	}

	removeLogo () {
		$("#logo").fadeOut(3000,() => {
			this.loadWelcomeMessage();
		});
	}

	loadWelcomeMessage () {
		console.log("loadWelcomeMessage");
		$("#welcome-message").fadeIn(3000, () => {
			this.removeWelcomeMessage();
		});
	}

	removeWelcomeMessage () {
		$("#welcome-message").fadeOut(3000, () => {
			this.setState({loading: false});
		});
	}

  render () {
    return (
      <div style={ container }>
      	<div style={ {textAlign: "center"} }>
          <img id="logo" src={SeeWorldLogo} style={ logoStyle }/>
        </div>
        <div id="welcome-message" style={ welcomeMessageStyle }>
          Discover & Explore
        </div>
      </div>
    );
  }
}

export default IntroSequence;