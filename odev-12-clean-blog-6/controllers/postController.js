const Post = require('../models/Post');

// Tüm postları getir
exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ dateCreated: -1 });
  res.render('index', { posts });
};

// Tekil post getir
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};

// Yeni post formu
exports.getAddPost = (req, res) => {
  res.render('add_post');
};

// Yeni post oluştur
exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

// Post düzenleme formu
exports.getEditPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit_post', { post });
};

// Post güncelle
exports.updatePost = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/posts/' + req.params.id);
};

// Post sil
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
}; 