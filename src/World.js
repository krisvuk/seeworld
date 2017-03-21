import React, { Component } from 'react';
import $ from 'jquery';
import Datamap from 'datamaps';

var container = {
	position: "absolute",
	marginTop: "50px",
	width: window.innerWidth,
	height: window.innerHeight - 50
};

var mapStyle = {
	width: "100%",
	height: window.innerHeight - 50
}

class World extends Component {
  
  componentDidMount () {
		var map = new Datamap({element: document.getElementById('world-map-inner')});
	}

  render () {
    return (
      <div style={ container }>
      	<div id="world-map-inner" style={ mapStyle }></div>
      </div>
    );
  }
}

export default World;