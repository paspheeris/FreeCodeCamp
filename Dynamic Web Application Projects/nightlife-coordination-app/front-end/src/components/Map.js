/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  latLngs: PropTypes.array.isRequired,
  center: PropTypes.object.isRequired
}

const defaultProps = {}

const Map = ({latLngs, center}) => (
  <div className="gmap-div" ref={(divRef) => refMount(divRef, center, latLngs)}>
  </div>
)

const gmapApiKey = "AIzaSyCvo4V76TY-2If3vpxYt1wK5hRP0M6BA6A";

const refMount = (divRef, center, latLngs) => {
  console.log('in refMount');
  console.log(latLngs);
  const js_file = document.createElement('script');
  js_file.type = 'text/javascript';
  js_file.async = true;
  js_file.src = `https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}&callback=initMap`;
  divRef.appendChild(js_file);
  window.initMap = () => {
    // console.log('in initMap');
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(divRef, {
      zoom: 11,
      center: {lat: center.latitude, lng: center.longitude}
    });
    latLngs.forEach(latLng => {
      var marker = new google.maps.Marker({
        position: {lat: latLng.latitude, lng: latLng.longitude},
        map: map,
        title: "hello world",
        icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      });
    });
    // var marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map
    // });
  }
}

Map.propTypes = propTypes

Map.defaultProps = defaultProps

export default Map
