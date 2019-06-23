const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    number: '',
    res: '',
  });

});
router.post('/res', function(req, res, next) {
  var random = Math.random( );
  var result = "Correct";
  if( req.body.number != random ){
    result = "Incorrect";
  }
  res.render('index', { 
    title: 'Express',
    number: random,
    res: result,
  });
});

module.exports = router;
