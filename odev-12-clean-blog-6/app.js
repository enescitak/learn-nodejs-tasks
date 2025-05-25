require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Routes
const postRoutes = require('./routes/postRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

// MongoDB bağlantısı - Environment variable kullanımı
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/cleanblog-test-db';
mongoose.connect(mongoURI);

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

// Port configuration - Environment variable kullanımı
const PORT = process.env.PORT || 2100;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı`);
}); 