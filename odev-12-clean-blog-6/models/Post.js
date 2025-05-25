const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Post şemasını oluştur
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post; 