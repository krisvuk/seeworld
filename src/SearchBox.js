import React, { Component } from 'react';
import $ from 'jquery';
const GoogleImages = require('google-images');
const client = new GoogleImages('008603919192360776526:p2r6yid5md0', 'AIzaSyA-LYbZljQhAbfFcBdO84xcBXCT-LfmfFI	');

var searchBoxStyle = {
	border: "none",
	borderRadius: "10px",
	padding: "12px",
	fontSize: "15px",
	width: "400px",
	textAlign: "center"
};

class SearchBox extends Component {

	componentDidMount () {}

	searchWeb () {
		client.search( 'toronto' );
	}

  render () {
    return (
      <div>
      	<input id="search-box" style={ searchBoxStyle } type="text" placeholder="Enter a location" />
      </div>
    );
  }
}

export default SearchBox;