import React, { Component } from 'react';

var loadingStyle = {
  color: "#eee",
  fontFamily: "'Passion One', cursive",
  fontSize: "2.0em",
  textAlign: "center",
  display: "inline-block"
};

var fontStyle = {
  color: "#eee"
};

class Loading extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {

  }

  render() {

    return (
      <div style={ loadingStyle }>
        <span id="text" style={ fontStyle }>{this.props.text}</span>
        <br/>
        <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
      </div>
    );
  }
}

export default Loading;