const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Routes
const postRoutes = require('./routes/postRoutes');
const pageRoutes = require('./routes/pageRoutes');

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
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes kullanımı
app.use('/', postRoutes);
app.use('/', pageRoutes);

app.listen(2100, () => {
  console.log('Sunucu 2100 portunda başlatıldı');
}); 