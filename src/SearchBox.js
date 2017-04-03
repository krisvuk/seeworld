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

  constructor (props) {
    super(props);
    this.state = {
      keywords: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

	componentDidMount () {
		// bind 'Enter' to searchWeb()
		$("#search-box").keyup((event) => {
	    if(event.keyCode == 13){
	      this.searchWeb();
	    }
		});
	}

	searchWeb () {
		if (this.state.keywords !== "") {
			console.log(client.search( this.state.keywords ));
		}
	}

	handleChange (e) {
		this.setState({ keywords:e.target.value });
	}

  render () {
    return (
      <div>
      	<input 
      		id="search-box" 
      		style={ searchBoxStyle } 
      		type="text" 
      		placeholder="Enter a location"
      		onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBox;