const mongoose = require('mongoose');
const fetch = require('node-fetch');
const QueryHistory = require('../models/QueryHistory');
const {promisify} = require('util');

exports.imageSearchInfo = (req, res) => {
  // console.log(process.env);
  // res.json({work: 'working'});
  res.render('imageInfo');
}

exports.apiEndpoint = (req, res) => {
  const CSE_ID = process.env.SEARCH_ENGINE_ID;
  const apiKey = process.env.CSE_API_KEY;
  const offset = (req.query.offset * 10) || 1;
  const term = req.query.q;
  // console.log(req.query);

  //Promise that does the image search
  const imageData = fetch(`https://www.googleapis.com/customsearch/v1?q=${term}&cx=${CSE_ID}&key=${apiKey}&searchType=image&start=${offset}`)
    .then(data => {
      return data.json();
    });
  //Promise that dispatches the db save
  const imagehistory = new QueryHistory({searchTerm: term, when: Date.now()});
  const asyncSave = promisify(imagehistory.save).bind(imagehistory);
  const dbSave = asyncSave(imagehistory);

  Promise.all([imageData, dbSave])
    .then(values => {
      // console.log(values);
        const cleaned = values[0].items.reduce((accum, resObj) => {
          const tempObj = {};
          tempObj.url = resObj.link;
          tempObj.snippet = resObj.snippet,
          tempObj.thumbnail = resObj.image.thumbnailLink;
          tempObj.context = resObj.image.contextLink;
          return accum.concat(tempObj);
      }, []);
      res.json(cleaned);
    })
    .catch(err => {
      console.error(err);
    });
}

exports.history = (req, res) => {
  QueryHistory.find().sort('-when').limit(10)
    .then(data => {
      const cleaned = data.reduce((accum, obj) => {
        const tempObj = {};
        tempObj.term = obj.searchTerm;
        tempObj.when = obj.when;
        return accum.concat(tempObj);
      }, []);
      res.json(cleaned);
    })
    .catch(err => {
      console.error(err);
    });
}