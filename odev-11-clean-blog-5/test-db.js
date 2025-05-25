const mongoose = require('mongoose');
const Post = require('./models/Post');

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/cleanblog-test-db');

async function testDatabase() {
  try {
    console.log('MongoDB bağlantısı test ediliyor...');
    
    const posts = await Post.find({});
    console.log('Bulunan post sayısı:', posts.length);
    
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });
    
  } catch (error) {
    console.error('Hata:', error);
  } finally {
    mongoose.connection.close();
  }
}

testDatabase(); 