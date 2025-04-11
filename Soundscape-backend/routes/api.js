const express = require('express');
const multer = require('multer');
const { imageStorage, audioStorage } = require('../utils/cloudinary');
const Category = require('../models/Category');
const Sound = require('../models/Sound');

const uploadImage = multer({ storage: imageStorage });
const uploadAudio = multer({ storage: audioStorage });

const router = express.Router();

// GET all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories', details: err.message });
  }
});

// GET all sounds with populated category
router.get('/sounds', async (req, res) => {
  try {
    const sounds = await Sound.find().populate('category_id');
    const response = sounds.map(sound => ({
      _id: sound._id,
      name: sound.name,
      audioUrl: sound.audioUrl,
      category: {
        name: sound.category_id.name,
        image: sound.category_id.image
      }
    }));
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sounds', details: err.message });
  }
});

// POST a new category with image
router.post('/categories', uploadImage.single('image'), async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file.path; // Cloudinary image URL
    const category = new Category({ name, image });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create category', details: err.message });
  }
});

// POST a new sound with audio and name
router.post('/sounds', uploadAudio.single('audio'), async (req, res) => {
  try {
    const { name, category_id } = req.body;
    const audioUrl = req.file.path; // Cloudinary audio URL
    const sound = new Sound({ name, audioUrl, category_id });
    await sound.save();
    res.status(201).json(sound);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create sound', details: err.message });
  }
});

module.exports = router;
