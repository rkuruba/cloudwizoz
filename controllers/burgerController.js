const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const event = require('../models/event.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  event.all(function(data) {
    const hbsObject = {
      event: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


router.get('/events', function(req, res) {
  event.all(function(data) {
    const hbsObject = {
      event: data
    };
    console.log(hbsObject);
    res.render('event', hbsObject);
  });
});

router.get('/edit', function(req, res) {
  event.all(function(data) {
    const hbsObject = {
      event: data
    };
    console.log(hbsObject);
    res.render('edit', hbsObject);
  });
});


router.put("/api/events/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  console.log('condition', condition);
  event.update({future: req.body.future}, condition, function(result) {
    console.log('entered event updated');
    res.redirect("/")
    res.status(200).end();
  });
});

router.post('/api/events', function(req, res) {
  event.create(['campus','title','date','start_time','end_time','type','future'], [req.body.campus,req.body.title,req.body.date,req.body.start_time,req.body.end_time,req.body.type,req.body.future], function(result) {
    // Send back the ID of the new quote
   
    //res.json({ id: result.insertId });
    res.redirect("/");
  });
///  event.delete(['id'], [req.body.campus], function(result) {
    // Send back the ID of the new quote
   
    //res.json({ id: result.insertId });
  //  res.redirect("/");
//  });
});

router.delete('/api/events/:id', function(req, res) {
  event.delete(['id'], [req.body.campus], function(result) {
    // Send back the ID of the new quote
   
    //res.json({ id: result.insertId });
    res.redirect("/");
  });
});


module.exports = router;
