const express = require('express');
const router = express.Router();

// My imports
const {
  getBootcamps,
  getBootcamp,
  postBootcamp,
  putBootcamp,
  delBootcamp,
} = require('../controllers/controler');

router.route('/').get(getBootcamps).post(postBootcamp);

router.route('/:id').get(getBootcamp).put(putBootcamp).delete(delBootcamp);

module.exports = router;
