var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

var Yelp = require('yelpv3');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/yelp/bars/:location', (req, res) => {
  let id = process.env.YELP_CLIENT_ID;
  let secret = process.env.YELP_CLIENT_SECRET;
  let access_token = undefined;
  // console.log('in route');
  fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`,
  {method: 'POST'})

    .then(data => {
      return data.json();
    })
    .then(data => {
      // console.log(data);
      // console.log(data.access_token);
      access_token = data.access_token;
      console.log(req.params.location);
      return fetch(`https://api.yelp.com/v3/businesses/search?term=bar&location=${req.params.location}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
 
    })
    .then(data => {
      return data.json();
    })
    .then(json => {
      // console.log(json);
    //   var fs = require('fs');
    //   fs.writeFileSync("./test", JSON.stringify(json), function(err) {
    //   if(err) {
    //       return console.log(err);
    //   }

    // console.log("The file was saved!");
// }); 
      res.json(json);
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router;
