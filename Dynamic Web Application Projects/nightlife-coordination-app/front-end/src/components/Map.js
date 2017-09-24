/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import greenMarker from '../images/green-dot.png';

const propTypes = {
  latLngs: PropTypes.array.isRequired,
  center: PropTypes.object.isRequired
}

const defaultProps = {}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center,
      latLngs: this.props.latLngs,
      map: undefined
    }
    this.divRef = undefined;
  }
  componentDidMount() {
    const js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.async = true;
    js_file.src = `https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}&callback=initMap`;
    this.divRef.appendChild(js_file);
    window.initMap = () => {
        this.state.map = new google.maps.Map(this.divRef, {
        zoom: 11,
        center: this.props.center
      });
      this.setMarkers(this.state.map, this.props.latLngs);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    this.state.map.setCenter(this.props.center);
    console.dir(this.state.map);
    this.setMarkers(this.state.map, this.props.latLngs)
  }
  setMarkers = (map, latLngs) => {
    console.log('in setMarkers in Map.js');
    if(this.state.map) {
      console.log('in setMarkers if');
      latLngs.forEach(latLng => {
        const marker = new window.google.maps.Marker({
          position: {lat: latLng.lat, lng: latLng.lng}
        });
        marker.setMap(this.state.map);
      });
    }
  }
  render() {
    const {latLngs, center} = this.props; 
    return (
      <div className="gmap-div" ref={(divRef) => this.divRef = divRef}>
      </div>
    )
  }
}

const gmapApiKey = "AIzaSyCvo4V76TY-2If3vpxYt1wK5hRP0M6BA6A";

Map.propTypes = propTypes

Map.defaultProps = defaultProps

export default Map
