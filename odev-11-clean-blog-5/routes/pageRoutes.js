const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Hakkımda sayfası
router.get('/about', pageController.getAboutPage);

module.exports = router; 