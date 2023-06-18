const express = require('express');
const router = express.Router();
const Fundraiser = require('../models/fundraiser');

// Get all fundraisers
router.get('/', async (req, res) => {
  try {
    const fundraisers = await Fundraiser.find();
    res.json(fundraisers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new fundraiser
router.post('/', async (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'POST,GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    const { title, description, targetAmount } = req.body;
    const fundraiser = new Fundraiser({ title, description, targetAmount });
    await fundraiser.save();
    res.status(201).json(fundraiser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
