import React, { Component } from 'react';
import $ from 'jquery';
const GoogleImages = require('google-images');
const client = new GoogleImages('008603919192360776526:p2r6yid5md0', 'AIzaSyA-LYbZljQhAbfFcBdO84xcBXCT-LfmfFI	');

var searchBoxStyle = {
	color: "#fff",
	backgroundColor: "#444444",
	border: "none",
	borderRadius: "10px",
	padding: "12px",
	fontSize: "15px",
	width: "400px",
	textAlign: "center",
	opacity: "0.8"
};

class SearchBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      keywords: "",
      searched: false,
      results: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchWeb = this.searchWeb.bind(this);
  }

	componentDidMount () {
		// bind 'Enter' to searchWeb()
		$("#search-box").keyup((event) => {
	    if(event.keyCode === 13){
	      this.searchWeb();
	    }
		});
	}

	searchWeb () {
		if (this.state.keywords !== "") {
			$("#search-box").fadeOut(500);
			let imagesArray = [];
			client.search(this.state.keywords, {page: 1})
	    .then(images => {
	    	for (var i = 0; i < images.length-1; i++) {
	    		imagesArray.push(images[i]);
	    	}
		    this.setState({ searched:true });
	   		this.props.getImageData(imagesArray);
	    });
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
      		<br /><br />
      		<span style={ {color: "#fff"} }>Press 'space' to search again</span>
      </div>
    );
  }
}

export default SearchBox;