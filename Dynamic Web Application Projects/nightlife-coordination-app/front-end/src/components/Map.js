/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import loadJS from 'loadjs';

const propTypes = {}

const defaultProps = {}

const Map = props => (
  <div className="gmap-div" ref={divRef => refMount(divRef)}>
  </div>
)

const gmapApiKey = "AIzaSyCvo4V76TY-2If3vpxYt1wK5hRP0M6BA6A";

const refMount = (divRef) => {
  // console.log('in refMount');
  loadJS(`https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}&callback=initMap`);
  window.initMap = () => {
    // console.log('in initMap');
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(divRef, {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
}

Map.propTypes = propTypes

Map.defaultProps = defaultProps

export default Map
