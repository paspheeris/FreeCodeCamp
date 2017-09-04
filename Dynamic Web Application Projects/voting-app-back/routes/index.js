var express = require('express');
var router = express.Router();

// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise;
// const Poll = mongoose.model('Poll');
const Poll = require('../models/Poll');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/polls', (req, res) => {
  Poll.find({}).exec()
    .then(data => {
      console.log(data)
      res.json(data);
    })
    .catch(error => {
      console.log(error)
      res.json({error})
    })
});
router.patch('/poll/vote/:uuid', (req, res) => {
  console.log(req.body);

  // if(req.body.addedChoice) {
  //   Poll.find
  // }
   const poll = Poll.findOneAndUpdate(
     { key: req.params.uuid, 'votesByChoice.choiceName': 'SF'}, 
    { $inc: {'votesByChoice.$.count': 1}}, {
    new: true, //return the new Poll instead of the old one
    runValidators: true
  }).exec()
    .then(something => {
      console.log(something);
      res.json(something);
      // res.json(JSON.stringify(something));
    })
    .catch(error => res.json({error}));
    // poll.then(some => console.log(some));
    // res.send('ol');
    // res.json(JSON.stringify(poll));
})

module.exports = router;
