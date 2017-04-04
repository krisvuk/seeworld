import React, { Component } from 'react';
import $ from 'jquery';

var containerStyle = {
	width: "100%",
	marginTop: "50px",
	overflow: "hidden"

};

var imageStyle = {
	width: "33.33%",
	height: "300px"
};

class Images extends Component {
  
	constructor (props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
  	console.log(this.props.imageData);
  	var imageListHTML = [];
  	if (this.props.imageData) {
  		for (var i = 0; i < this.props.imageData.length; i++) {
  			imageListHTML.push(<img style={ imageStyle } src={this.props.imageData[i].url}/>);
  		}
  	}
    return (
      <div style={ containerStyle }>
      	{imageListHTML}
      </div>
    );
  }
}

export default Images;