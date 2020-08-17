require('dotenv').config();
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN
// console.log(MAPBOX_ACCESS_TOKEN)
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: MAPBOX_ACCESS_TOKEN });
// console.log(geocodingClient)

geocodingClient
  .forwardGeocode({
    query: 'Mission Viejo, CA'
  })
  .send()
  .then(response => {
    const match = response.body;
    // console.log(match);
    const features = match.features;
// console.log(features)

features.forEach(eachPlace=>{
  let city = eachPlace.place_name.split(",", [0])
  let state = eachPlace.place_name.split(",", [1])
    console.log(city)
    console.log(state)
})
  });

  // geocodingClient
  // .forwardGeocode({
  //   query: 'San Juan, Puerto Rico'
  // })
  // .send()
  // .then(response => {
  //   const match = response.body;
  //   let featureCoordinates = match.features[0].center;
  //   console.log(featureCoordinates);
  // });

  // geocodingClient
  // .reverseGeocode({
  //     query: [ -66.0571, 18.3744 ]
  // })
  // .send()
  // .then(response =>{
  //     const match = response.body;
  //     console.log(match)
  // })