const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Middleware'ler
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Ana sayfa - Postları göster
app.get('/', async (req, res) => {
  const posts = await Post.find({}).sort({ dateCreated: -1 });
  console.log('Bulunan post sayısı:', posts.length);
  console.log('Postlar:', posts);
  res.render('index', { posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

// Post ekleme
app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.listen(2100, () => {
  console.log('Sunucu 2100 portunda başlatıldı');
}); 