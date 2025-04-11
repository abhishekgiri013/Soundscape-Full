const mongoose = require('mongoose');

const SoundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  audioUrl: String,
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Sound', SoundSchema);
