import React, { Component } from 'react';
import SeeWorldLogo from '../assets/seeWorldLogo.png';

var headerStyle = {
	width: window.innerWidth,
	height: "50px",
	background: "#222222",
	position: "absolute"
};

var logoStyle = {
	height: "20px",
	marginTop: "15px",
	marginLeft: "15px"
};

var authorTagStyle = {
	float: "right",
	lineHeight: "50px",
	paddingRight: "15px",
	fontFamily: "'Oregano', cursive",
	color: "#3399ff"
};

class Header extends Component {

  render () {
    return (
      <div style={ headerStyle }>
      	<img src={ SeeWorldLogo } style={ logoStyle }/>
      	<a href="https://www.thoughtsahead.com"><div id="author-tag" style={ authorTagStyle }><u>By: Kris Vukasinovic</u></div></a>
      </div>
    );
  }
}

export default Header;