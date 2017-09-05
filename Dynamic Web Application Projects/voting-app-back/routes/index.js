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
      // console.log(data)
      res.json(data);
    })
    .catch(error => {
      console.log(error)
      res.json({error})
    })
});
router.patch('/poll/vote/:_id', (req, res) => {
  console.log(req.body);

  if(req.body.addedChoice) {
    Poll.findOne({_id: req.params._id})
      // .select('votesByChoice allChoices')
      .then(something => {
        // console.log(something);
        something.votesByChoice.push({choiceName: req.body.choice, count: 1});
        something.allChoices.push(req.body.choice);
        // console.log(something);        
        return something.save()
      })
      .then(saved => {
        res.json(saved);
        // console.log(saved);
      })
      .catch(error => {
        console.log(error);
      })
      return;
  }
   const poll = Poll.findOneAndUpdate(
     { _id: req.params._id, 'votesByChoice.choiceName': req.body.choice}, 
    { $inc: {'votesByChoice.$.count': 1}}, {
    new: true, //return the new Poll instead of the old one
    runValidators: true
  }).exec()
    .then(something => {
      // console.log(something);
      res.json(something);
      // res.json(JSON.stringify(something));
    })
    .catch(error => res.json({error}));
    // poll.then(some => console.log(some));
    // res.send('ol');
    // res.json(JSON.stringify(poll));
});
router.post('/poll/create', (req, res) => {
  // console.log(req.body.poll);
  const poll = new Poll(req.body.poll);
  // console.log(poll);
  poll.save()
    .then(saved => {
      console.log(saved);
      res.json(saved);
    })
    .catch(error => {
      console.log(error)
      res.json({error});
    });
});

module.exports = router;
