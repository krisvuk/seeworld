import React, { Component } from 'react';
import SeeWorldLogo from '../assets/seeWorldLogo.png';

class WorldMap extends Component {

  render () {
    return (
      <div style={ headerStyle }>
      	<img src={ SeeWorldLogo } style={ logoStyle }/>
      </div>
    );
  }
}

export default WorldMap;