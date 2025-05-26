const express = require('express');
const router = express.Router();

const { formData, getAllApplications } = require('../controller/formController');

router.post('/formdata', formData)
router.get('/applications', getAllApplications)  
module.exports = router;
