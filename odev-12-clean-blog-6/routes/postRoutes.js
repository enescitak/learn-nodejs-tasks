const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Ana sayfa - Tüm postlar
router.get('/', postController.getAllPosts);

// Yeni post formu
router.get('/add_post', postController.getAddPost);

// Yeni post oluştur
router.post('/posts', postController.createPost);

// Tekil post
router.get('/posts/:id', postController.getPost);

// Post düzenleme formu
router.get('/posts/:id/edit', postController.getEditPost);

// Post güncelle
router.put('/posts/:id', postController.updatePost);

// Post sil
router.delete('/posts/:id', postController.deletePost);

module.exports = router; 