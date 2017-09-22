import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {}

const defaultProps = {}
const gmapApiKey = "AIzaSyCvo4V76TY-2If3vpxYt1wK5hRP0M6BA6A";
const Map = props => (
  <div ref={refMount}>
  
    {/*<script
     src={`https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}&callback=initMap`}>
    </script>*/}
  </div>

)
const refMount = (divRef) => {
  const script = document.createElement("script");

  script.src = `https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;

  divRef.appendChild(script);
  // fetch(`https://maps.googleapis.com/maps/api/js?key=${gmapApiKey}`)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  console.log(script.src);
}
  const initMap = () => {
    console.log('in initMap');
    // console.log(something);
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

Map.propTypes = propTypes

Map.defaultProps = defaultProps

export default Map
