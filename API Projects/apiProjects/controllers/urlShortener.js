const mongoose = require('mongoose');
// const URL = mongoose.model('URL');
const URL = require('../models/URL');
const Counter = require('../models/URL');


exports.urlShortenerInfo = (req, res) => {
  res.render('urlShortenerInfo');
}

exports.url = (req, res) => {
  // console.log(req.params);
  // let derp = await mongoose.connection.collection('counter').findOne({dur: "hur"});
  if (parseInt(req.params[0])) {
    // console.log('retireive');
    mongoose.connection.collection('urls').findOne({short_url: `localhost:7777/url/${req.params[0]}` })
      .then(data => {
        if(!data) {
          res.json( {'error': `URL not found`});
        } else {
          // console.log('data', data.original_url);
          res.redirect(data.original_url);
        }
      })
      .catch(err => {
        // console.log('url not found');
      })
  } else {
      mongoose.connection.collection('counter').findOneAndUpdate({dur: "hur"}, {
        $inc: { counter: 1}
      })
        .then(counterObject => {
          // console.log(counterObject.value.counter);
          let url = new URL({
          original_url: req.params[0],
          short_url: `localhost:7777/url/${counterObject.value.counter}`
        });
        return url.save();
      // console.log(derp);
      // let count = await 
    }).then(dbObject => {
      console.log(dbObject);
      res.json({
        short_url: dbObject.short_url
      });
    });

  }
}